"use client";

import { useState, useEffect } from "react";

const images = [
  "1RabeYqYG0B6_NTPBurBFQA7Sbk9MVl_7",
  "1A3mfw3EN31Zb2Lru_As_Hl_B7iubhzFe",
  "1wjnQZiDBx0X3IGqwaORcPPygWmZ0qGPO",
  "1dRuJP8LA3L2nNGwuVTHqe7S4nmuH8eco",
  "1JhOx3v-DHhnjOFG3PbtaDrkW-p4HqrWR",
  "1qqgRKjwRXJ0PAdwlwHwcjfw5JWY1Thqx",
  "1F-0nIpU7HHkJgQXeb2QoYMkkzk4NMEP9",
  "1akLQpnbqJD7ZzwpxapBLa4eDq_Tt-xeT",
  "1i9gxQPSU94M38wNrpga4x4gFJr3yx5Uh",
  "1W5UCB9UjHQh7GiHoE74ZRYpzpNUD3HL4",
  "1S7Y7yRl0tC-K_YTsh2lnvT8tDQzMG_8X",
  "1F5loYzZdCC9cz5qfvHCEVX6VUKy_zSKr",
  "1-6FLoTOejYaZfYeymXB8shOVH9RZ13Y1",
  "1usGuNlzWjCkEMm5w69v9QIn-KduZwUfe",
  "1bL3CnkR74nmw0SyKJoW3HTay21eNjK59",
  "1WfyxzVEVE1m8yHMTzksMOnKZ3tMQ9-WC",
  "1HKlsjfq5zxN3eODvmPvuJkkm8sxNThPr",
  "1qZtbpPz6_Gq-hndZpB6crfpCW4gVpskM",
  "1uxvcN7ioZcY0PoIKOHr_x5MEXfth9heL",
  "1zfu1UkkKmBgPrwPNHJ1hX9BYw0n6uxWS",
  "1wfjf1OmgrwKZTjgv1IVewfN-kG0fI-nv",
  "1aByiF7bUKsnmuId3BJdoT69XyGpJRL_t",
  "1u1iY1PPwMiHUTgc3-WhuL7rklmS_wqSB",
  "1Tg3p5il5rHKXZldYMeB3R4SseLU8Z_aT",
  "1N64ZdptOizfJ3OGV99XhhsrgNTQZRxif",
  "1ys6xNRJzrRUUDFz3zOi9aU_Y7afZrzOq",
  "1g8I1Auh2czUzlfkP0ebXxOwQuOYuwDj4",
  "1-6F9B1iI5Uyzyn-yUu0cGiJx_0pv5vXvo",
  "1RWaZdnOIKCrWkW-bIKr2Hb8OjBfDRRSo",
  "1OQ2XgKMIhdnKqHSm1FTq1kThgX8D3S4I",
  "1ehgODZEnjxEpAybzNPUuTf_dSSoLMxjw",
  "1rhWu-W6NnPEiKZf0TTFtNIXP0MbBckQm",
  "1EwUGizxQU9_aKlAsND_x9v9C_4H1PMpG",
  "1FgZndzP1-W0MdTyqEysWzFbGZslr3zE7",
  "1XJpiEv3k0gkWqSfgSuMgSHPSuEwEKIkv",
  "1S3Bh7oi9K_M57pvksFgnSOrfcMJ0l4Iq",
  "1JWmIya9wGvoS3jAKWrYyoYcOnIlP7_kS",
  "1SOkMIeD26NnMGWiO_6y0bthojD4TGax6",
  "1Ej9vMnIueB0w3GVD8FuZkgWr8eEYNOyT",
  "1Qe1E8DbmO-fzAeE1LKxBdoRyT4A25ayb",
  "1OtNFEC1xzj65hDHDZXFeL6JhC1ULy_Uy",
  "1Z05EzldY_tDbOFiJSbAgYThxNy1OBqLk",
  "1rjtdbivRqt9-eUwU0ygxuONsZRe8coqE",
  "1zKboM3tA2hZn-UmRhKhyFG2m5jKOh6mD",
  "1c3Kw4p-CWLr4jDGjig3YY3TW9q8X-E3W",
  "1WzA0SfwFZ9DKe3bIQAKY9W1xyNsGZtxP",
  "1rK1tpOE38LJAvOeBd5HTq9vZp0ZCt9iZ",
  "1tGyIPebc9OwLUoYQgKpXwRE_5B99FqTG",
  "1GlRZKDQYznvFyPXz-n05tWD9gMZ07uIg",
  "1eGjzFq2SePO3d6kUp9tdBC2-q8Ge2kY4",
  "1gPrkYv5yCArq95iVEQmRiKRYW3_A8x_j",
  "1T5XNdArT5P9xS4bN1F0rk6kmqCrU13cd",
  "1mcSywFQ25PIkKuVv_C2GiIFqQ0Wh3y3Z",
  "1c4Xbb3n08Whg17WXLqpoBrSTx_k1E5z4",
  "1rwlFw8waCNn7Z0KheGNGF88Yf82NUNnv",
  "1N_h8SvGpLlmMJkqCcf4X0u_GzKqY_hZo",
  "1rKNRgRP-cStkS1LL3gkkHxUSVAW1z7cM",
  "1omNUI0CRgF8_SzIVj1KSKBv5-X3FhJPz",
  "1dBFeAQ0s0XP1vLJmi3zNdKmowEZKNTy7",
  "1btxX_y1_Ui6m-zYJUn0-y9R3AWGzDhCJ",
  "1s_8JYbnQdXLyb6Fo2JzsnqMGx6cG0PyP",
  "1HiWBMqugplzqN2qxKQZEDajMKiFhDxQa",
  "1XBlW3M4BG0-yqKMmlV8jO3OxXcJgAXg_",
  "1idUc8EouKfboDwBJKP_GtSXMszR8rsGU",
];

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className="min-h-screen bg-[#f9fafb] px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">
        Catálogo de Impressões 3D
      </h1>

      {loading ? (
        <div className="flex justify-center items-center h-[60vh]">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-400 border-t-transparent"></div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {images.map((id) => (
            <div
              key={id}
              className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 hover:shadow-xl transition-shadow"
            >
              <img
                src={`https://drive.google.com/uc?export=view&id=${id}`}
                alt="Impressão 3D"
                className="w-full h-64 object-cover"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = "/placeholder.png";
                }}
              />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}




 