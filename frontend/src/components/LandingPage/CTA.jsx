import React from "react";
import {
  Soup,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
        const navigate=useNavigate();
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-[#FF5252] px-8 py-16 text-center text-white sm:px-16">
        <Soup className="pointer-events-none absolute -left-6 -top-6 h-32 w-32 text-white/10" />
        <Soup className="pointer-events-none absolute -bottom-8 -right-8 h-40 w-40 rotate-12 text-white/10" />
        <h2 className="font-display relative text-3xl font-semibold sm:text-4xl">
          Your feed is hungrier than you are.
        </h2>
        <p className="font-body relative mx-auto mt-3 max-w-md text-white/85">
          Join as a customer to start watching, or as a partner to start selling
          — either way, you're two taps from the good part.
        </p>
        <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <button
            className="rounded-full bg-white px-7 py-4 text-sm font-bold text-[#FF5252] transition hover:-translate-y-0.5"
            onClick={() => navigate("/login")}
          >
            Get Yumloop free
          </button>
          <button
            className="rounded-full border-2 border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:border-white"
            onClick={() => navigate("/partner/register")}
          >
            Apply as a food partner
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
