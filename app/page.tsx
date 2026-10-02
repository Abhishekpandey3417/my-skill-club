"use client"

import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { ArrowUpRight, BriefcaseBusiness, Check, ChevronDown, Compass, Laptop, MonitorPlay, Sparkles, Target, Users } from "lucide-react"

type View = "home" | "learn" | "curriculum" | "faq"

const navItems: { key: View; label: string }[] = [
  { key: "home", label: "Why Join" },
  { key: "learn", label: "What You'll Learn" },
  { key: "curriculum", label: "15-Day Curriculum" },
  { key: "faq", label: "FAQ" },
]

const item = { initial: { opacity: 0, y: 18 }, animate: { opacity: 1, y: 0, transition: { duration: 0.45 } } }
const stagger = { animate: { transition: { staggerChildren: 0.07 } } }

export default function Page() {
  const [view, setView] = useState<View>("home")

  return (
    <main className="min-h-screen bg-[#f4f1ea] p-3 text-[#17221d] md:p-5">
      <section className="relative flex min-h-[calc(100vh-1.5rem)] flex-col overflow-hidden rounded-[28px] bg-[#102d27] md:min-h-[calc(100vh-2.5rem)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,45,39,.98)_0%,rgba(16,45,39,.82)_45%,rgba(16,45,39,.3)_100%),url('/skills-club-live-session.png')] bg-cover bg-center" />
        <div className="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative flex flex-1 flex-col px-4 pb-8 pt-5 md:px-8 md:pt-6">
          <motion.nav initial={{ opacity: 0, y: -14 }} animate={{ opacity: 1, y: 0 }} className="mx-auto flex w-full max-w-7xl items-center gap-4">
            <div className="flex flex-1 items-center justify-between rounded-full bg-[#fffdf8] px-5 py-3 shadow-sm md:px-7 md:py-4">
              <button onClick={() => setView("home")} className="flex items-center gap-2 text-left" aria-label="Go to Skills Club home">
                <span className="flex size-8 items-center justify-center rounded-full bg-[#d7f05f] text-sm font-bold text-[#173f35]">SC</span>
                <span className="leading-tight"><span className="block text-lg font-semibold tracking-tight text-[#173f35]">SKILLS CLUB</span><span className="block text-[9px] font-semibold uppercase tracking-[0.18em] text-[#718078]">Powered by MyProFunnels</span></span>
              </button>
              <ul className="hidden items-center gap-1 md:flex">{navItems.map((nav) => <li key={nav.key}><button onClick={() => setView(nav.key)} className={`rounded-full px-4 py-1.5 text-sm transition-colors ${view === nav.key ? "bg-[#eaf4d5] font-semibold text-[#173f35]" : "text-[#718078] hover:text-[#173f35]"}`}>{nav.label}</button></li>)}</ul>
            </div>
            <a href="https://links.skillsclub.in" className="inline-flex items-center gap-2 rounded-full bg-[#d7f05f] py-3 pl-5 pr-3 text-sm font-semibold text-[#173f35] hover:bg-[#e6f887] md:py-4 md:pl-7 md:pr-4">Join Live <span className="flex size-7 items-center justify-center rounded-full bg-[#173f35] text-[#d7f05f]"><ArrowUpRight className="size-4" /></span></a>
          </motion.nav>
          <div className="mx-auto mt-9 flex w-full max-w-7xl flex-1 flex-col justify-center md:mt-12"><AnimatePresence mode="wait">{view === "home" && <HomeView key="home" onNavigate={setView} />}{view === "learn" && <LearnView key="learn" />}{view === "curriculum" && <CurriculumView key="curriculum" />}{view === "faq" && <FaqView key="faq" />}</AnimatePresence></div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-4 py-5 md:grid-cols-3 md:py-8">
        <div className="rounded-[24px] bg-white p-6 shadow-sm md:p-8">
          <span className="text-3xl font-semibold text-[#173f35]">Live on Zoom</span>
          <p className="mt-3 text-sm leading-relaxed text-[#718078]">50 minutes of focused guidance, Hindi explanations और interactive activities के साथ।</p>
        </div>
        <div className="rounded-[24px] bg-[#d7f05f] p-6 shadow-sm md:p-8">
          <span className="text-3xl font-semibold text-[#173f35]">One clear next step</span>
          <p className="mt-3 text-sm leading-relaxed text-[#365349]">अपने options को समझिए, अपनी strengths पर सोचिए और learning journey को direction दीजिए।</p>
        </div>
        <div className="rounded-[24px] bg-white p-6 shadow-sm md:p-8">
          <span className="text-3xl font-semibold text-[#173f35]">For every graduate</span>
          <p className="mt-3 text-sm leading-relaxed text-[#718078]">BA, BSc, BCom, MA, MSc और MCom graduates के लिए practical शुरुआत।</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 pb-5 md:grid-cols-[1.05fr_.95fr] md:pb-8">
        <div className="rounded-[28px] bg-[#173f35] p-7 text-white md:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7f05f]">Why this session?</span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight md:text-5xl">Degree आपकी शुरुआत है। Direction आपका अगला कदम है।</h2>
          <p className="mt-5 max-w-xl leading-relaxed text-white/75">Qualification के बाद job, business, freelancing या skill development — options बहुत हैं। इस live session में आप अपने interests, strengths और working preferences को practical possibilities से जोड़ना शुरू करेंगे।</p>
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <MiniCard title="Niche Clarity" text="Career और business niche को simple examples के साथ समझें।" />
            <MiniCard title="Self Discovery" text="अपनी working style और natural preferences पर reflection करें।" />
            <MiniCard title="Practical Growth" text="Communication, digital basics और professional skills की शुरुआत करें।" />
            <MiniCard title="Better Questions" text="अपने next step के लिए सही questions पूछना सीखें।" />
          </div>
        </div>
        <div className="rounded-[28px] bg-white p-7 md:p-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718078]">What will be taught?</span>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-[#173f35] md:text-4xl">Niche Clarity से Career Clarity की तरफ</h2>
          <p className="mt-4 leading-relaxed text-[#718078]">आपको कोई एक career थोपना नहीं है। हमारा उद्देश्य है कि आप अपने options को structured तरीके से समझें और अगला सही कदम सोचकर चुनें।</p>
          <div className="mt-6 flex flex-col gap-4">{["Niche क्या है और यह career से कैसे जुड़ता है?", "अपनी strengths, interests और working style पहचानना", "Job, business और freelancing pathways को compare करना", "Digital work, AI और modern workplace की basic understanding"].map((text, index) => <div key={text} className="flex gap-3"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#eaf4d5] text-xs font-bold text-[#173f35]">{index + 1}</span><p className="text-sm leading-relaxed text-[#365349]">{text}</p></div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl rounded-[28px] bg-[#eaf4d5] p-7 md:p-10">
        <div className="grid gap-8 md:grid-cols-[.8fr_1.2fr] md:items-center">
          <div><span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718078]">Your next step</span><h2 className="mt-3 text-3xl font-medium tracking-tight text-[#173f35] md:text-5xl">Confusion को postpone मत कीजिए — clarity की शुरुआत कीजिए।</h2></div>
          <div><p className="leading-relaxed text-[#365349]">यह live session कोई unrealistic promise नहीं देता। इसका focus practical guidance, self-reflection और learning direction पर है। Live session में जुड़कर अपनी next step की शुरुआत करें।</p><a href="https://links.skillsclub.in" className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#173f35] py-3 pl-6 pr-3 font-semibold text-[#d7f05f] hover:bg-[#245448]">Reserve Your Live Access <span className="flex size-7 items-center justify-center rounded-full bg-[#d7f05f] text-[#173f35]"><ArrowUpRight className="size-4" /></span></a></div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-2 px-2 py-7 text-sm text-[#718078] sm:flex-row sm:items-center sm:justify-between"><span className="font-semibold tracking-wide text-[#173f35]">SKILLS CLUB · Powered by My ProFunnels</span><span>© 2026 Skills Club. All rights reserved.</span></footer>
    </main>
  )
}

function HomeView({ onNavigate }: { onNavigate: (view: View) => void }) {
  return <motion.div variants={stagger} initial="initial" animate="animate" exit={{ opacity: 0 }} className="text-center">
    <motion.div variants={item} className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#d7f05f] backdrop-blur-md"><span className="size-2 rounded-full bg-[#d7f05f]" /> Live learning session</motion.div>
    <motion.h1 variants={item} className="mx-auto max-w-4xl text-balance text-4xl font-medium leading-[1.04] tracking-tight text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">Degree है।<br /><span className="text-[#d7f05f]">अब Direction चाहिए।</span></motion.h1>
    <motion.p variants={item} className="mx-auto mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/85 md:text-lg">अगर आपने BA / BSc / BCom / MA / MSc / MCom किया है और अभी भी सोच रहे हैं "अब आगे क्या?" — Skills Club का Live Session आपकी career और business niche को समझने की practical शुरुआत है।</motion.p>
    <motion.p variants={item} className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/65">यह session आपको अपने interests, strengths और opportunities को समझकर एक focused learning journey शुरू करने में मदद करेगा।</motion.p>
    <motion.div variants={item} className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row"><a href="https://links.skillsclub.in" className="inline-flex items-center gap-2 rounded-full bg-[#d7f05f] py-3 pl-7 pr-3 text-sm font-semibold text-[#173f35] hover:bg-[#e6f887] md:py-4 md:pl-8 md:text-base">Join Live Session <span className="flex size-8 items-center justify-center rounded-full bg-[#173f35] text-[#d7f05f]"><ArrowUpRight className="size-4" /></span></a><button onClick={() => onNavigate("learn")} className="rounded-full border border-white/30 bg-white/10 px-7 py-3 text-sm font-medium text-white backdrop-blur-sm hover:bg-white/20 md:py-4 md:text-base">Session Details ↓</button></motion.div>
    <motion.div variants={item} className="mx-auto mt-10 grid max-w-3xl gap-3 text-left sm:grid-cols-3"><InfoPill label="Format" value="Live + Interactive" icon={MonitorPlay} /><InfoPill label="Focus" value="Career & Business Niche" icon={Target} /><InfoPill label="Outcome" value="Clear Next Step" icon={Sparkles} /></motion.div>
  </motion.div>
}

function InfoPill({ label, value, icon: Icon }: { label: string; value: string; icon: typeof MonitorPlay }) { return <div className="rounded-2xl border border-white/15 bg-black/20 p-4 text-white backdrop-blur-md"><div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#d7f05f]"><Icon className="size-4" />{label}</div><div className="mt-2 text-lg font-medium">{value}</div></div> }

function LearnView() { const cards = [[Compass, "Niche Clarity", "अपनी education, interests, strengths और working preferences को career possibilities से जोड़कर देखना सीखें।"], [BriefcaseBusiness, "Job या Business?", "Job, business, freelancing या skill development — अलग pathways को structured तरीके से समझें।"], [Users, "Self Discovery", "Live personality activity से अपनी working style और natural preferences पर reflection करें।"], [Laptop, "Digital & Modern Work", "Communication, digital basics, AI और modern workplace की practical understanding बनाएं।"], [Check, "Practical Growth", "Session के बाद आपकी 15-day learning journey और next action ज्यादा clear हो।"]] as const; return <motion.div variants={stagger} initial="initial" animate="animate" exit={{ opacity: 0 }}><motion.div variants={item} className="text-center"><span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs text-[#d7f05f]"><Target className="size-3.5" /> LEARN • PRACTICE • GROW</span><h2 className="mx-auto mt-5 max-w-3xl text-balance text-4xl font-medium tracking-tight text-white md:text-5xl lg:text-6xl">Niche Clarity से Career Clarity की तरफ</h2><p className="mx-auto mt-4 max-w-2xl text-white/80 md:text-lg">Session का उद्देश्य आपको कोई एक career थोपना नहीं, बल्कि अपने options को structured तरीके से समझने और अपने अगले कदम पर बेहतर विचार करने में मदद करना है।</p></motion.div><motion.div variants={stagger} className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{cards.map(([Icon, title, desc]) => <motion.div key={title} variants={item} className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-md"><span className="flex size-11 items-center justify-center rounded-xl bg-[#d7f05f] text-[#173f35]"><Icon className="size-5" /></span><h3 className="mt-4 text-lg font-semibold text-white">{title}</h3><p className="mt-1.5 text-sm leading-relaxed text-white/75">{desc}</p></motion.div>)}</motion.div></motion.div> }

const days = ["Career & Niche Clarity", "Self Discovery", "Personality Understanding", "Communication Skills", "Spoken English for Work", "Digital Basics", "Zoom & Online Meetings", "Telecalling Skills", "Customer Understanding", "Sales Fundamentals", "Personal Branding", "AI & Modern Work", "Career Pathways", "Practical Assignment", "Review & Next Step"]
function CurriculumView() { return <motion.div variants={stagger} initial="initial" animate="animate" exit={{ opacity: 0 }}><motion.div variants={item} className="text-center"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7f05f]">Skills Club learning journey</span><h2 className="mx-auto mt-3 text-4xl font-medium tracking-tight text-white md:text-5xl">15-Day Curriculum</h2><p className="mx-auto mt-3 max-w-xl text-white/75">Learn. Practice. Grow. Practical skills की एक focused शुरुआत।</p></motion.div><motion.div variants={stagger} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{days.map((day, index) => <motion.div key={day} variants={item} className="flex items-start gap-3 rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#d7f05f] text-sm font-bold text-[#173f35]">{String(index + 1).padStart(2, "0")}</span><div><h3 className="font-semibold text-white">{day}</h3><p className="mt-1 text-xs leading-relaxed text-white/65">Learning, practice और review के साथ आगे की journey।</p></div></motion.div>)}</motion.div></motion.div> }

function FaqView() { const faqs = ["यह session किस language में होगा?", "क्या session Zoom पर होगा?", "क्या यह केवल job seekers के लिए है?", "क्या personality test कोई professional psychological test है?", "15-Day Curriculum में क्या मिलेगा?", "क्या सिर्फ graduation degree काफी है?"]; return <motion.div variants={stagger} initial="initial" animate="animate" exit={{ opacity: 0 }} className="mx-auto w-full max-w-3xl"><motion.div variants={item} className="text-center"><span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d7f05f]">Need to know</span><h2 className="mt-3 text-4xl font-medium tracking-tight text-white md:text-5xl">Frequently Asked Questions</h2></motion.div><motion.div variants={stagger} className="mt-8 flex flex-col gap-3">{faqs.map((faq) => <motion.details key={faq} variants={item} className="group rounded-2xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur-md"><summary className="flex cursor-pointer list-none items-center justify-between font-medium">{faq}<ChevronDown className="size-5 text-[#d7f05f] transition-transform group-open:rotate-180" /></summary><p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/70">हाँ, यह session practical guidance और self-reflection के लिए बनाया गया है। Live session में आपको इसकी पूरी जानकारी और next steps बताए जाएंगे।</p></motion.details>)}</motion.div><motion.div variants={item} className="mt-8 text-center"><a href="https://links.skillsclub.in" className="inline-flex items-center gap-2 rounded-full bg-[#d7f05f] px-6 py-3 font-semibold text-[#173f35] hover:bg-[#e6f887]">Reserve Your Live Access <ArrowUpRight className="size-4" /></a><p className="mt-5 text-xs text-white/55">SKILLS CLUB · Powered by MyProFunnels</p></motion.div></motion.div> }

function MiniCard({ title, text }: { title: string; text: string }) { return <div className="rounded-2xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md"><h3 className="font-semibold">{title}</h3><p className="mt-1 text-xs leading-relaxed text-white/70">{text}</p></div> }
