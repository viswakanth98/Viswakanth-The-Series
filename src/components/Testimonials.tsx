import { motion } from 'framer-motion';
import { managerQuote, peerFeedback } from '../data/portfolio';
import { EASE, SectionHeading, Tilt } from './fx';

export default function Testimonials() {
  return (
    <>
      <SectionHeading
        kicker="Voices from the field"
        title="Testimonials"
        aside={<p className="max-w-sm text-sm leading-relaxed text-mist">Feedback from managers and peers on customer obsession, ownership, technical depth, and collaboration.</p>}
      />

      <div className="gutter">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-8% 0px' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <Tilt max={4} className="rounded-2xl">
            <article className="relative overflow-hidden rounded-2xl bg-[radial-gradient(120%_100%_at_0%_0%,#183b52,#0d151d_58%,#08090c)] px-6 py-8 ring-1 ring-[#4cc9ff]/25 sm:px-10 sm:py-10">
              <span aria-hidden className="absolute -left-2 -top-8 font-serif text-[10rem] leading-none text-[#4cc9ff]/15">“</span>
              <blockquote className="relative max-w-5xl font-serif text-xl leading-relaxed text-bone sm:text-2xl">{managerQuote.quote}</blockquote>
              <div className="relative mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4cc9ff]/15 text-sm font-bold tracking-wider text-[#8edfff] ring-1 ring-[#4cc9ff]/35">{managerQuote.initials}</div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-bone">{managerQuote.name}</span>
                  <span className="text-xs text-mist">{managerQuote.role}</span>
                </div>
              </div>
            </article>
          </Tilt>
        </motion.div>

        <div className="mt-14">
          <div className="mb-5 flex items-end justify-between gap-4">
            <h3 className="font-sans text-lg font-semibold text-bone sm:text-2xl">Peer Feedback</h3>
            <span className="text-xs uppercase tracking-[0.22em] text-smoke">{peerFeedback.length} voices</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {peerFeedback.map((feedback, i) => (
              <motion.div
                key={feedback.quote}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-6% 0px' }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: EASE }}
              >
                <Tilt max={5} className="h-full rounded-xl">
                  <article className="flex h-full min-h-[250px] flex-col rounded-xl bg-ink-2/80 p-5 ring-1 ring-white/10 transition duration-500 hover:ring-[#4cc9ff]/40 sm:p-6">
                    <p className="text-sm leading-relaxed text-bone/80">{feedback.quote}</p>
                    <span className="mt-auto pt-7 text-[10px] font-bold uppercase tracking-[0.22em] text-[#8edfff]">◉ {feedback.tag}</span>
                  </article>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
