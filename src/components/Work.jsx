import { motion } from 'framer-motion';
import { useScrollReveal } from './useScrollReveal';
import { seedGallery, trainingPoints, workStats, designWork, videoWork } from '../data/portfolio';

function Shot({ item, index }) {
  const [ref, visible] = useScrollReveal(0.1);
  return (
    <motion.figure ref={ref}
      initial={{ opacity: 0, y: 28 }} animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className={`card-glow rounded-xl overflow-hidden m-0 ${item.wide ? 'sm:col-span-2 lg:col-span-3' : ''}`}>
      <img src={item.src} alt={item.alt} loading="lazy"
        className={`w-full object-cover ${item.wide ? 'h-72 md:h-[26rem]' : 'h-60'}`} />
      <figcaption className="p-4 font-mono text-[0.68rem] tracking-wide" style={{ color: 'rgba(241,245,249,0.6)' }}>
        {item.caption}
      </figcaption>
    </motion.figure>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative z-10 py-28 px-6 md:px-12 lg:px-20"
      style={{ background: 'linear-gradient(180deg, #0b1120 0%, #0f1829 100%)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="sec-label">Communications Work</div>
        <h2 className="sec-heading">Design, Video &amp; <em>Digital Campaigns</em></h2>
        <div className="sec-divider" />
        <p className="max-w-2xl -mt-6 mb-10 text-[0.85rem] leading-relaxed" style={{ color: 'rgba(241,245,249,0.5)' }}>
          A SEED program initiative (MasterCard Foundation, Entrepreneurship Development Institute, Orbit Innovation Hub)
          that helped 21 medium enterprises build their digital presence. Below: the closing day and the training behind it.
        </p>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {workStats.map(s => (
            <div key={s.label} className="card-glow rounded-xl p-5 text-center">
              <div className="text-3xl font-bold" style={{ color: '#fcd34d' }}>{s.value}</div>
              <div className="font-mono text-[0.62rem] tracking-wide mt-1" style={{ color: 'rgba(241,245,249,0.55)' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <h3 className="font-mono text-[0.7rem] tracking-widest uppercase mb-5" style={{ color: '#fcd34d' }}>Graphic design for enterprise clients</h3>
        <p className="-mt-3 mb-5 text-[0.78rem]" style={{ color: 'rgba(241,245,249,0.5)' }}>All graphics and videos on this page are my original work.</p>
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 mb-14">
          {designWork.map(d => (
            <figure key={d.src} className="card-glow rounded-xl overflow-hidden mb-4 break-inside-avoid m-0">
              <img src={d.src} alt={`${d.client}: ${d.type}`} loading="lazy" className="w-full" />
              <figcaption className="p-3 font-mono text-[0.62rem]" style={{ color: 'rgba(241,245,249,0.6)' }}>{d.client} · {d.type}</figcaption>
            </figure>
          ))}
        </div>

        <h3 className="font-mono text-[0.7rem] tracking-widest uppercase mb-5" style={{ color: '#fcd34d' }}>Short-form video</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {videoWork.map(v => (
            <figure key={v.src} className="card-glow rounded-xl overflow-hidden m-0">
              <video src={v.src} poster={v.poster} controls preload="none" playsInline className="w-full aspect-[9/16] object-cover bg-black" />
              <figcaption className="p-3 font-mono text-[0.62rem]" style={{ color: 'rgba(241,245,249,0.6)' }}>{v.client} · {v.type}</figcaption>
            </figure>
          ))}
        </div>

        <h3 className="font-mono text-[0.7rem] tracking-widest uppercase mb-5" style={{ color: '#fcd34d' }}>Closing day</h3>
        <div className="card-glow rounded-xl p-6 mb-10 max-w-3xl">
          <div className="font-mono text-[0.65rem] tracking-widest uppercase mb-3" style={{ color: '#fcd34d' }}>
            Short-term consulting and training
          </div>
          <ul className="list-none space-y-2">
            {trainingPoints.map(p => (
              <li key={p} className="text-[0.82rem] leading-relaxed" style={{ color: 'rgba(241,245,249,0.65)' }}>
                • {p}
              </li>
            ))}
          </ul>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {seedGallery.map((g, i) => <Shot key={g.src} item={g} index={i} />)}
        </div>
      </div>
    </section>
  );
}
