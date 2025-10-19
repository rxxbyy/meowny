
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Scroll() {
    const main = useRef();

    useGSAP(
        () => {
            const cards = gsap.utils.toArray('.card');
            cards.forEach((card) => {
                gsap.to(card, {
                    scale: 1.1,
                    scrollTrigger: {
                        trigger: card,
                        start: 'bottom bottom',
                        end: 'top 20%',
                        scrub: 0.5,
                    },
                });
            });
        },
        { scope: main }
    );

    return (
        <section ref={main} className="p-10 flex flex-col items-center bg-pink-1/90 font-daruma text-pink-2 gap-y-2 text-xl">
            <header className="text-3xl">
                <p className='text-left'>Con MEOWNY puedes</p>
            </header>
            <div className="card">
                mantener un orden
            </div>
        </section>
    )
}