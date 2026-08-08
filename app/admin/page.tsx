'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Search,
  Filter,
  UserCheck,
  UserPlus,
  Clock,
  CheckCircle2,
  AlertCircle,
  Briefcase,
  Scale,
  Award,
  ShieldCheck,
  Sparkles,
  X,
  Activity,
  FileText,
  ChevronRight,
  TrendingUp,
  Building2,
  Check,
} from 'lucide-react';

interface Lawyer {
  id: string;
  name: string;
  avatar: string;
  specialization: string;
  experienceYears: number;
  activeCases: number;
  maxCases: number;
  successRate: number;
  status: 'Available' | 'Busy' | 'On Leave';
  location: string;
  barRegistration: string;
  bio: string;
}

interface CaseItem {
  id: string;
  title: string;
  type: string;
  court: string;
  filingDate: string;
  priority: 'Urgent' | 'High' | 'Medium' | 'Low';
  status: 'Pending' | 'Ongoing' | 'Resolved';
  aiStage: 'Document Review' | 'Evidence Analysis' | 'Timeline Generation' | 'Legal Research' | 'Argument Comparison' | 'Recommendation';
  aiStageProgress: number; // 0 - 100
  assignedLawyerId: string | null;
  summary: string;
  plaintiff: string;
  defendant: string;
}

const initialLawyers: Lawyer[] = [
  {
    id: 'l1',
    name: 'Adv. Rajesh Verma',
    avatar: '👨‍⚖️',
    specialization: 'Property & Land Disputes',
    experienceYears: 18,
    activeCases: 3,
    maxCases: 5,
    successRate: 92,
    status: 'Available',
    location: 'Delhi High Court',
    barRegistration: 'D/1042/2008',
    bio: 'Senior advocate specializing in ancestral land disputes, title verification, and partition suits.',
  },
  {
    id: 'l2',
    name: 'Adv. Priya Sharma',
    avatar: '👩‍⚖️',
    specialization: 'Corporate & Contract Law',
    experienceYears: 12,
    activeCases: 4,
    maxCases: 5,
    successRate: 95,
    status: 'Available',
    location: 'Bombay High Court',
    barRegistration: 'MAH/4521/2014',
    bio: 'Specialist in commercial contract breaches, corporate mergers, and arbitration proceedings.',
  },
  {
    id: 'l3',
    name: 'Adv. Amitav Sen',
    avatar: '👨‍💼',
    specialization: 'Constitutional & Public Law',
    experienceYears: 22,
    activeCases: 5,
    maxCases: 5,
    successRate: 96,
    status: 'Busy',
    location: 'Supreme Court of India',
    barRegistration: 'SC/8821/2004',
    bio: 'Vast experience handling fundamental rights writ petitions and public interest litigation.',
  },
  {
    id: 'l4',
    name: 'Adv. Sunita Kulkarni',
    avatar: '👩‍💼',
    specialization: 'Family & Inheritance Law',
    experienceYears: 15,
    activeCases: 2,
    maxCases: 4,
    successRate: 89,
    status: 'Available',
    location: 'Karnataka High Court',
    barRegistration: 'KAR/2201/2011',
    bio: 'Expert in succession disputes, wills, probate verification, and family settlement deeds.',
  },
  {
    id: 'l5',
    name: 'Adv. Vikramaditya Rao',
    avatar: '👨‍⚖️',
    specialization: 'Criminal & Special Acts',
    experienceYears: 16,
    activeCases: 1,
    maxCases: 4,
    successRate: 91,
    status: 'Available',
    location: 'Allahabad High Court',
    barRegistration: 'UP/6712/2010',
    bio: 'Focused on financial fraud, economic offences, and complex criminal trial procedure.',
  },
];

const initialCases: CaseItem[] = [
  {
    id: 'NYA-2026-081',
    title: 'Sharma vs Sharma ancestral land partition dispute',
    type: 'Property & Land Disputes',
    court: 'Delhi District Court',
    filingDate: '2026-07-14',
    priority: 'Urgent',
    status: 'Pending',
    aiStage: 'Document Review',
    aiStageProgress: 25,
    assignedLawyerId: null,
    summary: 'Dispute regarding ownership and partition of ancestral agricultural land in Outer Delhi following testate succession.',
    plaintiff: 'Ramesh Sharma',
    defendant: 'Suresh Sharma',
  },
  {
    id: 'NYA-2026-074',
    title: 'Apex Tech Solutions vs City Infra Contract Breach',
    type: 'Corporate & Contract Law',
    court: 'Commercial Court, Mumbai',
    filingDate: '2026-07-20',
    priority: 'High',
    status: 'Ongoing',
    aiStage: 'Argument Comparison',
    aiStageProgress: 80,
    assignedLawyerId: 'l2',
    summary: 'Non-payment and breach of SLA in municipal smart-city IT infrastructure implementation project.',
    plaintiff: 'Apex Tech Solutions Pvt Ltd',
    defendant: 'City Infrastructure Corp',
  },
  {
    id: 'NYA-2026-068',
    title: 'Kulkarni Estate Probate and Will Authenticity Claim',
    type: 'Family & Inheritance Law',
    court: 'Karnataka High Court',
    filingDate: '2026-06-29',
    priority: 'Medium',
    status: 'Pending',
    aiStage: 'Evidence Analysis',
    aiStageProgress: 45,
    assignedLawyerId: null,
    summary: 'Contested will validity challenge filed by legal heirs claiming forged signatures on property deed.',
    plaintiff: 'Sunil Kulkarni & Others',
    defendant: 'Anil Kulkarni',
  },
  {
    id: 'NYA-2026-052',
    title: 'State vs Horizon Financial Services Alleged Fraud',
    type: 'Criminal & Special Acts',
    court: 'Sessions Court, Prayagraj',
    filingDate: '2026-06-10',
    priority: 'Urgent',
    status: 'Ongoing',
    aiStage: 'Legal Research',
    aiStageProgress: 65,
    assignedLawyerId: 'l5',
    summary: 'Multi-crore investment scheme fraud investigation and asset freezing writ petition.',
    plaintiff: 'State Economic Offences Wing',
    defendant: 'Horizon Financial Services',
  },
  {
    id: 'NYA-2026-041',
    title: 'Citizens Union vs Environment Board Forest Encroachment',
    type: 'Constitutional & Public Law',
    court: 'Supreme Court of India',
    filingDate: '2026-05-18',
    priority: 'High',
    status: 'Ongoing',
    aiStage: 'Recommendation',
    aiStageProgress: 95,
    assignedLawyerId: 'l3',
    summary: 'PIL challenging environmental clearance granted to industrial park near protected reserve forest area.',
    plaintiff: 'Green Citizens Action Forum',
    defendant: 'State Environmental Impact Board',
  },
  {
    id: 'NYA-2026-019',
    title: 'Verma Logistics vs Union Freight Claims Dispute',
    type: 'Corporate & Contract Law',
    court: 'Delhi High Court',
    filingDate: '2026-04-02',
    priority: 'Low',
    status: 'Resolved',
    aiStage: 'Recommendation',
    aiStageProgress: 100,
    assignedLawyerId: 'l1',
    summary: 'Interstate cargo loss claim settled out of court through AI evidence audit synthesis.',
    plaintiff: 'Verma Logistics Pvt Ltd',
    defendant: 'Union Freight Shipping',
  },
];

export default function AdminPortal() {
  const [cases, setCases] = useState<CaseItem[]>(initialCases);
  const [lawyers, setLawyers] = useState<Lawyer[]>(initialLawyers);
  const [activeTab, setActiveTab] = useState<'overview' | 'cases' | 'lawyers'>('overview');
  const [statusFilter, setStatusFilter] = useState<'All' | 'Pending' | 'Ongoing' | 'Resolved'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCase, setSelectedCase] = useState<CaseItem | null>(null);
  const [isAssignModalOpen, setIsAssignModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Statistics computations
  const totalCases = cases.length;
  const pendingCasesCount = cases.filter((c) => c.status === 'Pending').length;
  const ongoingCasesCount = cases.filter((c) => c.status === 'Ongoing').length;
  const resolvedCasesCount = cases.filter((c) => c.status === 'Resolved').length;
  const unassignedCount = cases.filter((c) => !c.assignedLawyerId).length;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleAssignLawyer = (caseId: string, lawyerId: string) => {
    const targetCase = cases.find((c) => c.id === caseId);
    const targetLawyer = lawyers.find((l) => l.id === lawyerId);

    if (!targetCase || !targetLawyer) return;

    // Check workload
    if (targetLawyer.activeCases >= targetLawyer.maxCases) {
      showToast(`⚠️ ${targetLawyer.name} has reached maximum active case capacity (${targetLawyer.maxCases}).`);
      return;
    }

    const previousLawyerId = targetCase.assignedLawyerId;

    // Update Cases state
    setCases((prev) =>
      prev.map((c) =>
        c.id === caseId
          ? {
              ...c,
              assignedLawyerId: lawyerId,
              status: c.status === 'Pending' ? 'Ongoing' : c.status,
            }
          : c
      )
    );

    // Update Lawyers state caseloads
    setLawyers((prev) =>
      prev.map((l) => {
        if (l.id === lawyerId) {
          return { ...l, activeCases: l.activeCases + 1 };
        }
        if (l.id === previousLawyerId && l.activeCases > 0) {
          return { ...l, activeCases: l.activeCases - 1 };
        }
        return l;
      })
    );

    setIsAssignModalOpen(false);
    setSelectedCase(null);
    showToast(`✅ Successfully assigned ${targetLawyer.name} to Case ${caseId}`);
  };

  const filteredCases = cases.filter((c) => {
    const matchesStatus = statusFilter === 'All' || c.status === statusFilter;
    const matchesSearch =
      c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-nyaya-dark text-white">
      {/* Toast Banner */}
      {toastMessage && (
        <div className="fixed top-6 right-6 z-50 flex items-center gap-3 rounded-2xl border border-nyaya-blue/30 bg-slate-900/90 px-5 py-3 text-sm font-semibold text-white shadow-2xl backdrop-blur-md animate-bounce">
          <Sparkles className="h-5 w-5 text-nyaya-blue" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Admin Top Header */}
      <header className="border-b border-white/10 bg-nyaya-deep/80 px-6 py-4 backdrop-blur-lg sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-xl bg-white/5 px-3.5 py-2 text-xs font-semibold text-slate-300 transition hover:bg-white/10"
            >
              <ArrowLeft className="h-4 w-4" />
              Main Landing
            </Link>
            <div className="h-6 w-px bg-white/10" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-nyaya-blue/20 text-nyaya-blue ring-1 ring-nyaya-blue/30">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h1 className="text-lg font-semibold text-white leading-none">NyayaAI — Head of Admin Portal</h1>
                <p className="mt-1 text-xs text-slate-400">Judicial Operations & Lawyer Assignment Control</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-2 rounded-full bg-nyaya-blue/10 px-3.5 py-1.5 text-xs font-semibold text-nyaya-blue ring-1 ring-nyaya-blue/20">
              <span className="h-2 w-2 rounded-full bg-nyaya-blue animate-pulse" />
              Head Administrator Active
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-tr from-nyaya-blue to-nyaya-purple font-semibold text-xs text-white">
              HA
            </div>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-6 py-8 sm:px-10 lg:px-16">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition ${
                activeTab === 'overview'
                  ? 'bg-nyaya-blue text-slate-950 shadow-lg shadow-nyaya-blue/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              <Activity className="h-4 w-4" />
              Working Overview
            </button>

            <button
              onClick={() => setActiveTab('cases')}
              className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition ${
                activeTab === 'cases'
                  ? 'bg-nyaya-blue text-slate-950 shadow-lg shadow-nyaya-blue/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              <Briefcase className="h-4 w-4" />
              Case Monitor
              {unassignedCount > 0 && (
                <span className="ml-1 rounded-full bg-amber-500/20 px-2 py-0.5 text-xs font-bold text-amber-300 ring-1 ring-amber-500/30">
                  {unassignedCount} Action
                </span>
              )}
            </button>

            <button
              onClick={() => setActiveTab('lawyers')}
              className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-sm font-semibold transition ${
                activeTab === 'lawyers'
                  ? 'bg-nyaya-blue text-slate-950 shadow-lg shadow-nyaya-blue/20'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              <UserCheck className="h-4 w-4" />
              Lawyer Directory & Profiles ({lawyers.length})
            </button>
          </div>
        </div>

        {/* METRICS & SUMMARY CARDS */}
        <section className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glass backdrop-blur-xl">
            <div className="flex items-center justify-between text-slate-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Total Cases</span>
              <FileText className="h-5 w-5 text-nyaya-blue" />
            </div>
            <p className="mt-3 text-3xl font-bold text-white">{totalCases}</p>
            <div className="mt-2 flex items-center gap-1.5 text-xs text-slate-300">
              <TrendingUp className="h-3.5 w-3.5 text-emerald-400" />
              <span>Across 4 district & high courts</span>
            </div>
          </div>

          <div className="rounded-3xl border border-amber-500/30 bg-amber-500/5 p-6 shadow-glass backdrop-blur-xl">
            <div className="flex items-center justify-between text-amber-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Pending Assignment</span>
              <AlertCircle className="h-5 w-5 text-amber-400" />
            </div>
            <p className="mt-3 text-3xl font-bold text-amber-300">{pendingCasesCount}</p>
            <p className="mt-2 text-xs text-amber-200/80">Requires Head of Admin lawyer allocation</p>
          </div>

          <div className="rounded-3xl border border-nyaya-purple/30 bg-nyaya-purple/5 p-6 shadow-glass backdrop-blur-xl">
            <div className="flex items-center justify-between text-nyaya-purple">
              <span className="text-xs font-semibold uppercase tracking-wider">Ongoing AI Cases</span>
              <Activity className="h-5 w-5 text-nyaya-purple" />
            </div>
            <p className="mt-3 text-3xl font-bold text-nyaya-purple">{ongoingCasesCount}</p>
            <p className="mt-2 text-xs text-slate-300">Active multi-agent legal synthesis</p>
          </div>

          <div className="rounded-3xl border border-emerald-500/30 bg-emerald-500/5 p-6 shadow-glass backdrop-blur-xl">
            <div className="flex items-center justify-between text-emerald-400">
              <span className="text-xs font-semibold uppercase tracking-wider">Resolved Cases</span>
              <CheckCircle2 className="h-5 w-5 text-emerald-400" />
            </div>
            <p className="mt-3 text-3xl font-bold text-emerald-300">{resolvedCasesCount}</p>
            <p className="mt-2 text-xs text-emerald-200/80">Finalized with advisory report</p>
          </div>
        </section>

        {/* OVERVIEW TAB CONTENT */}
        {activeTab === 'overview' && (
          <section className="mt-8 space-y-8">
            {/* Urgent Action Needed Alert */}
            {unassignedCount > 0 && (
              <div className="rounded-3xl border border-amber-500/40 bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent p-6 shadow-xl backdrop-blur-xl">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400 ring-1 ring-amber-500/30">
                      <AlertCircle className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-amber-200">
                        {unassignedCount} Case{unassignedCount > 1 ? 's' : ''} Awaiting Lawyer Assignment
                      </h3>
                      <p className="mt-1 text-sm text-slate-300">
                        As Head of Admin, review case type requirements and assign an advocate with matching expertise.
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setStatusFilter('Pending');
                      setActiveTab('cases');
                    }}
                    className="flex items-center gap-2 rounded-2xl bg-amber-400 px-5 py-3 text-xs font-bold text-slate-950 transition hover:bg-amber-300"
                  >
                    View Pending Cases
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            )}

            {/* Live Case Working Monitor Grid */}
            <div className="grid gap-8 lg:grid-cols-3">
              <div className="space-y-6 lg:col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-white">Active Case Workflows & AI Stages</h2>
                    <p className="text-xs text-slate-400">Real-time working status across 6 multi-agent modules</p>
                  </div>
                  <button
                    onClick={() => setActiveTab('cases')}
                    className="text-xs font-semibold text-nyaya-blue hover:underline"
                  >
                    View All Cases &rarr;
                  </button>
                </div>

                <div className="space-y-4">
                  {cases.map((c) => {
                    const assignedLawyer = lawyers.find((l) => l.id === c.assignedLawyerId);

                    return (
                      <div
                        key={c.id}
                        className="rounded-3xl border border-white/10 bg-slate-950/60 p-6 shadow-glass transition hover:border-nyaya-blue/30"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-3">
                          <div>
                            <div className="flex items-center gap-2.5">
                              <span className="rounded-md bg-white/10 px-2.5 py-1 text-xs font-mono font-semibold text-slate-200">
                                {c.id}
                              </span>
                              <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                                  c.status === 'Pending'
                                    ? 'bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20'
                                    : c.status === 'Ongoing'
                                    ? 'bg-nyaya-purple/10 text-nyaya-purple ring-1 ring-nyaya-purple/20'
                                    : 'bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20'
                                }`}
                              >
                                {c.status}
                              </span>
                              <span className="text-xs text-slate-400">• {c.type}</span>
                            </div>
                            <h3 className="mt-3 text-base font-semibold text-white">{c.title}</h3>
                          </div>

                          <button
                            onClick={() => {
                              setSelectedCase(c);
                              setIsAssignModalOpen(true);
                            }}
                            className={`flex items-center gap-2 rounded-2xl px-4 py-2 text-xs font-semibold transition ${
                              assignedLawyer
                                ? 'bg-white/10 text-slate-200 hover:bg-white/15'
                                : 'bg-amber-400 text-slate-950 font-bold hover:bg-amber-300'
                            }`}
                          >
                            <UserPlus className="h-3.5 w-3.5" />
                            {assignedLawyer ? 'Reassign Advocate' : 'Assign Lawyer'}
                          </button>
                        </div>

                        {/* Working Progress Bar */}
                        <div className="mt-5 space-y-2">
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-semibold text-nyaya-mint flex items-center gap-1.5">
                              <Sparkles className="h-3.5 w-3.5 text-nyaya-blue" />
                              Working Stage: {c.aiStage}
                            </span>
                            <span className="text-slate-400">{c.aiStageProgress}% Complete</span>
                          </div>
                          <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                            <div
                              className="h-full rounded-full bg-gradient-to-r from-nyaya-blue via-nyaya-purple to-nyaya-mint transition-all duration-500"
                              style={{ width: `${c.aiStageProgress}%` }}
                            />
                          </div>
                        </div>

                        {/* Assigned Lawyer Info Footer */}
                        <div className="mt-5 flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3 text-xs">
                          <span className="text-slate-400">Assigned Legal Counsel:</span>
                          {assignedLawyer ? (
                            <div className="flex items-center gap-2">
                              <span>{assignedLawyer.avatar}</span>
                              <span className="font-semibold text-white">{assignedLawyer.name}</span>
                              <span className="text-slate-400">({assignedLawyer.specialization})</span>
                            </div>
                          ) : (
                            <span className="font-semibold text-amber-400">⚠️ Unassigned — Requires Head Action</span>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Lawyer Load & Availability Sidebar */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-white">Advocate Roster Status</h2>
                  <button
                    onClick={() => setActiveTab('lawyers')}
                    className="text-xs font-semibold text-nyaya-blue hover:underline"
                  >
                    Manage Profiles &rarr;
                  </button>
                </div>

                <div className="space-y-4">
                  {lawyers.map((lawyer) => (
                    <div
                      key={lawyer.id}
                      className="rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-glass"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-xl">
                            {lawyer.avatar}
                          </div>
                          <div>
                            <p className="font-semibold text-white text-sm">{lawyer.name}</p>
                            <p className="text-xs text-slate-400">{lawyer.specialization}</p>
                          </div>
                        </div>
                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-bold ${
                            lawyer.status === 'Available'
                              ? 'bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20'
                              : 'bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20'
                          }`}
                        >
                          {lawyer.status}
                        </span>
                      </div>

                      <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
                        <div className="rounded-xl bg-white/5 p-2.5 text-center">
                          <p className="text-slate-400">Active Load</p>
                          <p className="mt-1 font-bold text-white">
                            {lawyer.activeCases} / {lawyer.maxCases} Cases
                          </p>
                        </div>
                        <div className="rounded-xl bg-white/5 p-2.5 text-center">
                          <p className="text-slate-400">Success Rate</p>
                          <p className="mt-1 font-bold text-emerald-400">{lawyer.successRate}%</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CASES MONITOR TAB */}
        {activeTab === 'cases' && (
          <section className="mt-8 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Search input */}
              <div className="relative min-w-[280px] flex-1">
                <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search cases by ID, title, or legal area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-2xl border border-white/10 bg-slate-950/70 pl-11 pr-4 py-3 text-sm text-white placeholder-slate-400 focus:border-nyaya-blue focus:outline-none focus:ring-1 focus:ring-nyaya-blue"
                />
              </div>

              {/* Status Filters */}
              <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-950/70 p-1.5">
                {(['All', 'Pending', 'Ongoing', 'Resolved'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setStatusFilter(filter)}
                    className={`rounded-xl px-4 py-2 text-xs font-semibold transition ${
                      statusFilter === filter
                        ? 'bg-nyaya-blue text-slate-950 shadow-md'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            {/* Cases List */}
            <div className="grid gap-6">
              {filteredCases.map((c) => {
                const assignedLawyer = lawyers.find((l) => l.id === c.assignedLawyerId);

                return (
                  <div
                    key={c.id}
                    className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-glass transition hover:border-white/20"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div className="space-y-2 max-w-3xl">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="rounded-md bg-nyaya-blue/10 px-3 py-1 font-mono text-xs font-semibold text-nyaya-blue ring-1 ring-nyaya-blue/20">
                            {c.id}
                          </span>
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              c.priority === 'Urgent'
                                ? 'bg-rose-500/10 text-rose-300 ring-1 ring-rose-500/30'
                                : c.priority === 'High'
                                ? 'bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/30'
                                : 'bg-slate-500/10 text-slate-300 ring-1 ring-slate-500/30'
                            }`}
                          >
                            {c.priority} Priority
                          </span>
                          <span className="text-xs text-slate-400">• {c.court}</span>
                        </div>
                        <h3 className="text-lg font-semibold text-white">{c.title}</h3>
                        <p className="text-xs text-slate-300 leading-relaxed">{c.summary}</p>
                      </div>

                      <div className="flex flex-col items-end gap-3">
                        <button
                          onClick={() => {
                            setSelectedCase(c);
                            setIsAssignModalOpen(true);
                          }}
                          className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-xs font-bold transition ${
                            assignedLawyer
                              ? 'bg-white/10 text-slate-200 hover:bg-white/15'
                              : 'bg-nyaya-blue text-slate-950 hover:bg-nyaya-blue/90 shadow-lg shadow-nyaya-blue/20'
                          }`}
                        >
                          <UserPlus className="h-4 w-4" />
                          {assignedLawyer ? 'Change Advocate Assignment' : 'Assign Advocate'}
                        </button>
                      </div>
                    </div>

                    <div className="mt-6 grid gap-4 rounded-2xl bg-white/5 p-4 sm:grid-cols-3">
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-slate-400">Current AI Working Stage</p>
                        <p className="mt-1 font-semibold text-nyaya-mint text-xs flex items-center gap-1.5">
                          <Activity className="h-3.5 w-3.5 text-nyaya-blue" />
                          {c.aiStage} ({c.aiStageProgress}%)
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-slate-400">Parties Involved</p>
                        <p className="mt-1 text-xs text-slate-200 font-medium">
                          {c.plaintiff} vs {c.defendant}
                        </p>
                      </div>
                      <div>
                        <p className="text-[11px] uppercase tracking-wider text-slate-400">Assigned Advocate</p>
                        {assignedLawyer ? (
                          <div className="mt-1 flex items-center gap-2 text-xs font-semibold text-white">
                            <span>{assignedLawyer.avatar}</span>
                            <span>{assignedLawyer.name}</span>
                          </div>
                        ) : (
                          <p className="mt-1 text-xs font-semibold text-amber-400">⚠️ Unassigned</p>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* LAWYER DIRECTORY TAB */}
        {activeTab === 'lawyers' && (
          <section className="mt-8 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold text-white">Advocate Profiles & Workload Allocation</h2>
                <p className="text-xs text-slate-400">Inspect advocate specializations, active cases, and bar registration details</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {lawyers.map((lawyer) => (
                <div
                  key={lawyer.id}
                  className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 shadow-glass flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-nyaya-blue/20 to-nyaya-purple/20 text-3xl border border-white/10">
                          {lawyer.avatar}
                        </div>
                        <div>
                          <h3 className="font-semibold text-white text-base">{lawyer.name}</h3>
                          <p className="text-xs text-nyaya-blue font-medium">{lawyer.specialization}</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">{lawyer.barRegistration}</p>
                        </div>
                      </div>
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-semibold ${
                          lawyer.status === 'Available'
                            ? 'bg-emerald-500/10 text-emerald-300 ring-1 ring-emerald-500/20'
                            : 'bg-amber-500/10 text-amber-300 ring-1 ring-amber-500/20'
                        }`}
                      >
                        {lawyer.status}
                      </span>
                    </div>

                    <p className="mt-4 text-xs text-slate-300 leading-relaxed bg-white/5 p-3 rounded-2xl">
                      {lawyer.bio}
                    </p>

                    <div className="mt-4 space-y-2.5 text-xs text-slate-300">
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Court Jurisdiction:</span>
                        <span className="font-semibold text-white">{lawyer.location}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Experience:</span>
                        <span className="font-semibold text-white">{lawyer.experienceYears} Years</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-slate-400">Track Record Success:</span>
                        <span className="font-semibold text-emerald-400">{lawyer.successRate}% Verdict Rate</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className="text-slate-400">Active Case Capacity:</span>
                      <span className="font-semibold text-white">
                        {lawyer.activeCases} of {lawyer.maxCases} Slots Used
                      </span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                      <div
                        className={`h-full rounded-full ${
                          lawyer.activeCases >= lawyer.maxCases ? 'bg-amber-500' : 'bg-nyaya-blue'
                        }`}
                        style={{ width: `${(lawyer.activeCases / lawyer.maxCases) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* LAWYER SELECTION MODAL */}
        {isAssignModalOpen && selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-md">
            <div className="w-full max-w-2xl rounded-3xl border border-white/10 bg-nyaya-dark p-6 shadow-2xl sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-nyaya-blue">
                    Head of Admin — Advocate Match & Allocation
                  </span>
                  <h3 className="mt-1 text-xl font-semibold text-white">Assign Lawyer to Case</h3>
                </div>
                <button
                  onClick={() => setIsAssignModalOpen(false)}
                  className="rounded-full bg-white/10 p-2 text-slate-400 transition hover:bg-white/20 hover:text-white"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Case Details Card in Modal */}
              <div className="mt-5 rounded-2xl bg-slate-950/80 p-4 border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-nyaya-blue">{selectedCase.id}</span>
                  <span className="text-xs text-slate-400">{selectedCase.type}</span>
                </div>
                <p className="font-semibold text-white text-sm">{selectedCase.title}</p>
                <p className="text-xs text-slate-300">{selectedCase.summary}</p>
              </div>

              {/* Lawyer Selection List */}
              <div className="mt-6 space-y-3 max-h-[340px] overflow-y-auto pr-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Recommended Lawyers by Expertise Fit:
                </p>

                {lawyers.map((lawyer) => {
                  const isSpecializationMatch = lawyer.specialization.includes(selectedCase.type);
                  const isCapacityFull = lawyer.activeCases >= lawyer.maxCases;
                  const isCurrentlyAssigned = selectedCase.assignedLawyerId === lawyer.id;

                  return (
                    <div
                      key={lawyer.id}
                      className={`flex flex-wrap items-center justify-between gap-4 rounded-2xl border p-4 transition ${
                        isCurrentlyAssigned
                          ? 'border-nyaya-blue bg-nyaya-blue/10'
                          : 'border-white/10 bg-slate-950/50 hover:border-white/20'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{lawyer.avatar}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-white text-sm">{lawyer.name}</p>
                            {isSpecializationMatch && (
                              <span className="rounded-md bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300">
                                Best Match ⭐
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400">{lawyer.specialization} • {lawyer.experienceYears} Yrs Exp</p>
                          <p className="text-[11px] text-slate-400 mt-0.5">
                            Active Load: {lawyer.activeCases}/{lawyer.maxCases} cases | Success: {lawyer.successRate}%
                          </p>
                        </div>
                      </div>

                      <button
                        disabled={isCapacityFull || isCurrentlyAssigned}
                        onClick={() => handleAssignLawyer(selectedCase.id, lawyer.id)}
                        className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-bold transition ${
                          isCurrentlyAssigned
                            ? 'bg-emerald-500/20 text-emerald-300 cursor-default'
                            : isCapacityFull
                            ? 'bg-white/5 text-slate-500 cursor-not-allowed'
                            : 'bg-nyaya-blue text-slate-950 hover:bg-nyaya-blue/90 shadow-md'
                        }`}
                      >
                        {isCurrentlyAssigned ? (
                          <>
                            <Check className="h-4 w-4" />
                            Currently Assigned
                          </>
                        ) : isCapacityFull ? (
                          'Capacity Full'
                        ) : (
                          'Assign Lawyer'
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
