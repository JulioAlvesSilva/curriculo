import { useEffect, useRef, useState } from "react";

function transitionCode(referencia = useRef(null)){

    const [visivel, setVisivel] = useState<boolean>(false);
    
    useEffect(() => {
        const observar = new IntersectionObserver((entradas) => {
            entradas.forEach(entrada => {
                if (entrada.isIntersecting) {
                    setVisivel(true);
                }
            });
        });

        if (referencia.current) {
            observar.observe(referencia.current);
        }

        return () => {
            if (referencia.current) {
                observar.unobserve(referencia.current);
            }
        };
    }, []);

    return visivel
}

export {transitionCode}