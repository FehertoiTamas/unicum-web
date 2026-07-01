import { useState } from "react";
import { useTranslation } from "react-i18next";

type Variante = "clasico" | "ciruela" | "barista" | "naranja";

interface Receta {
  id: string;
  variante: Variante;
  nombreKey: string;
  taglineKey: string;
  copaKey: string;
  ingredientesKey: string;
  pasosKey: string;
}

const VARIANTES: Record<Variante, { color: string; colorTexto: string; inicial: string }> = {
  clasico: {
    color: "#8B4A1F",
    colorTexto: "#F2D9B8",
    inicial: "U",
  },
  ciruela: {
    color: "#6E3552",
    colorTexto: "#F0D6E2",
    inicial: "C",
  },
  barista: {
    color: "#4A3226",
    colorTexto: "#E9D4BF",
    inicial: "B",
  },
  naranja: {
    color: "#C1631B",
    colorTexto: "#FBE3C6",
    inicial: "N",
  },
};

const RECETAS: Receta[] = [
  {
    id: "sour",
    variante: "clasico",
    nombreKey: "cocktails.recipes.sour.name",
    taglineKey: "cocktails.recipes.sour.tagline",
    copaKey: "cocktails.recipes.sour.cup",
    ingredientesKey: "cocktails.recipes.sour.ingredients",
    pasosKey: "cocktails.recipes.sour.steps",
  },
  {
    id: "tonic",
    variante: "clasico",
    nombreKey: "cocktails.recipes.tonic.name",
    taglineKey: "cocktails.recipes.tonic.tagline",
    copaKey: "cocktails.recipes.tonic.cup",
    ingredientesKey: "cocktails.recipes.tonic.ingredients",
    pasosKey: "cocktails.recipes.tonic.steps",
  },
  {
    id: "mule",
    variante: "clasico",
    nombreKey: "cocktails.recipes.mule.name",
    taglineKey: "cocktails.recipes.mule.tagline",
    copaKey: "cocktails.recipes.mule.cup",
    ingredientesKey: "cocktails.recipes.mule.ingredients",
    pasosKey: "cocktails.recipes.mule.steps",
  },
  {
    id: "unicroni",
    variante: "clasico",
    nombreKey: "cocktails.recipes.unicroni.name",
    taglineKey: "cocktails.recipes.unicroni.tagline",
    copaKey: "cocktails.recipes.unicroni.cup",
    ingredientesKey: "cocktails.recipes.unicroni.ingredients",
    pasosKey: "cocktails.recipes.unicroni.steps",
  },
  {
    id: "espresso",
    variante: "clasico",
    nombreKey: "cocktails.recipes.espresso.name",
    taglineKey: "cocktails.recipes.espresso.tagline",
    copaKey: "cocktails.recipes.espresso.cup",
    ingredientesKey: "cocktails.recipes.espresso.ingredients",
    pasosKey: "cocktails.recipes.espresso.steps",
  },
  {
    id: "ciruela-sour",
    variante: "ciruela",
    nombreKey: "cocktails.recipes.ciruelaSour.name",
    taglineKey: "cocktails.recipes.ciruelaSour.tagline",
    copaKey: "cocktails.recipes.ciruelaSour.cup",
    ingredientesKey: "cocktails.recipes.ciruelaSour.ingredients",
    pasosKey: "cocktails.recipes.ciruelaSour.steps",
  },
  {
    id: "ciruela-spritz",
    variante: "ciruela",
    nombreKey: "cocktails.recipes.ciruelaSpritz.name",
    taglineKey: "cocktails.recipes.ciruelaSpritz.tagline",
    copaKey: "cocktails.recipes.ciruelaSpritz.cup",
    ingredientesKey: "cocktails.recipes.ciruelaSpritz.ingredients",
    pasosKey: "cocktails.recipes.ciruelaSpritz.steps",
  },
  {
    id: "barista-martini",
    variante: "barista",
    nombreKey: "cocktails.recipes.baristaMartini.name",
    taglineKey: "cocktails.recipes.baristaMartini.tagline",
    copaKey: "cocktails.recipes.baristaMartini.cup",
    ingredientesKey: "cocktails.recipes.baristaMartini.ingredients",
    pasosKey: "cocktails.recipes.baristaMartini.steps",
  },
  {
    id: "barista-white-russian",
    variante: "barista",
    nombreKey: "cocktails.recipes.baristaWhiteRussian.name",
    taglineKey: "cocktails.recipes.baristaWhiteRussian.tagline",
    copaKey: "cocktails.recipes.baristaWhiteRussian.cup",
    ingredientesKey: "cocktails.recipes.baristaWhiteRussian.ingredients",
    pasosKey: "cocktails.recipes.baristaWhiteRussian.steps",
  },
  {
    id: "naranja-spritz",
    variante: "naranja",
    nombreKey: "cocktails.recipes.naranjaSpritz.name",
    taglineKey: "cocktails.recipes.naranjaSpritz.tagline",
    copaKey: "cocktails.recipes.naranjaSpritz.cup",
    ingredientesKey: "cocktails.recipes.naranjaSpritz.ingredients",
    pasosKey: "cocktails.recipes.naranjaSpritz.steps",
  },
  {
    id: "naranja-mojito",
    variante: "naranja",
    nombreKey: "cocktails.recipes.naranjaMojito.name",
    taglineKey: "cocktails.recipes.naranjaMojito.tagline",
    copaKey: "cocktails.recipes.naranjaMojito.cup",
    ingredientesKey: "cocktails.recipes.naranjaMojito.ingredients",
    pasosKey: "cocktails.recipes.naranjaMojito.steps",
  },
];

export default function UnicumCoctelera() {
  const { t } = useTranslation();
  const [filtro, setFiltro] = useState<Variante | "todos">("todos");
  const [abierto, setAbierto] = useState<string | null>(RECETAS[0].id);

  const recetasFiltradas =
    filtro === "todos" ? RECETAS : RECETAS.filter((r) => r.variante === filtro);

  const filtros = [
    { key: "todos" as const, etiqueta: t("cocktails.filters.all") },
    { key: "clasico" as const, etiqueta: t("cocktails.filters.clasico") },
    { key: "ciruela" as const, etiqueta: t("cocktails.filters.ciruela") },
    { key: "barista" as const, etiqueta: t("cocktails.filters.barista") },
    { key: "naranja" as const, etiqueta: t("cocktails.filters.naranja") },
  ];

  return (
    <section
      className="w-full py-14 px-4 sm:px-6"
      style={{ backgroundColor: "#1B120C" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p
            className="uppercase tracking-[0.25em] text-xs mb-3"
            style={{ color: "#C89347", fontFamily: "Inter, sans-serif" }}
          >
            {t("cocktails.label")}
          </p>
          <h2
            className="text-4xl sm:text-5xl mb-3"
            style={{
              color: "#F2E6D3",
              fontFamily: "'Fraunces', Georgia, serif",
              fontWeight: 600,
            }}
          >
            {t("cocktails.title")}
          </h2>
          <div
            className="mx-auto h-px w-24 mb-4"
            style={{ backgroundColor: "#5B6E4A" }}
          />
          <p
            className="max-w-xl mx-auto text-sm sm:text-base"
            style={{ color: "#C9B79C", fontFamily: "Inter, sans-serif" }}
          >
            {t("cocktails.subtitle")}
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {filtros.map((f) => {
            const activo = filtro === f.key;
            const color = f.key === "todos" ? "#C89347" : VARIANTES[f.key as Variante].color;
            return (
              <button
                key={f.key}
                onClick={() => setFiltro(f.key)}
                className="px-4 py-2 rounded-full text-sm transition-colors"
                style={{
                  fontFamily: "Inter, sans-serif",
                  border: `1px solid ${activo ? color : "#4A3B2E"}`,
                  backgroundColor: activo ? color : "transparent",
                  color: activo ? "#1B120C" : "#C9B79C",
                  fontWeight: activo ? 600 : 400,
                }}
              >
                {f.etiqueta}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {recetasFiltradas.map((r) => {
            const v = VARIANTES[r.variante];
            const expandido = abierto === r.id;
            const nombre = t(r.nombreKey);
            const tagline = t(r.taglineKey);
            const copa = t(r.copaKey);
            const ingredientes = t(r.ingredientesKey, { returnObjects: true }) as string[];
            const pasos = t(r.pasosKey, { returnObjects: true }) as string[];
            return (
              <div
                key={r.id}
                className="rounded-lg overflow-hidden transition-all"
                style={{
                  backgroundColor: "#241811",
                  border: "1px solid #3A2C20",
                }}
              >
                <button
                  onClick={() => setAbierto(expandido ? null : r.id)}
                  className="w-full text-left p-5 flex items-start gap-4"
                >
                  <span
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm"
                    style={{
                      backgroundColor: v.color,
                      color: v.colorTexto,
                      fontFamily: "'Fraunces', Georgia, serif",
                      fontWeight: 600,
                    }}
                  >
                    {v.inicial}
                  </span>
                  <span className="flex-1">
                    <span
                      className="block text-xs uppercase tracking-wider mb-1"
                      style={{ color: v.color, fontFamily: "Inter, sans-serif" }}
                    >
                      {t(`cocktails.variants.${r.variante}`)}
                    </span>
                    <span
                      className="block text-lg mb-1"
                      style={{
                        color: "#F2E6D3",
                        fontFamily: "'Fraunces', Georgia, serif",
                        fontWeight: 600,
                      }}
                    >
                      {nombre}
                    </span>
                    <span
                      className="block text-sm"
                      style={{ color: "#A99879", fontFamily: "Inter, sans-serif" }}
                    >
                      {tagline}
                    </span>
                  </span>
                  <span
                    className="flex-shrink-0 text-lg leading-none mt-1"
                    style={{ color: "#6B5A45" }}
                  >
                    {expandido ? "−" : "+"}
                  </span>
                </button>

                {expandido && (
                  <div
                    className="px-5 pb-5"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    <div
                      className="h-px w-full mb-4"
                      style={{ backgroundColor: "#3A2C20" }}
                    />
                    <p
                      className="text-xs uppercase tracking-wider mb-2"
                      style={{ color: "#5B6E4A" }}
                    >
                      {t("cocktails.labels.cup")}: <span style={{ color: "#C9B79C" }}>{copa}</span>
                    </p>

                    <p
                      className="text-xs uppercase tracking-wider mb-2 mt-4"
                      style={{ color: "#5B6E4A" }}
                    >
                      {t("cocktails.labels.ingredients")}
                    </p>
                    <ul className="space-y-1 mb-4">
                      {ingredientes.map((ing, i) => (
                        <li
                          key={i}
                          className="text-sm flex gap-2"
                          style={{ color: "#E4D6BF" }}
                        >
                          <span style={{ color: v.color }}>•</span>
                          {ing}
                        </li>
                      ))}
                    </ul>

                    <p
                      className="text-xs uppercase tracking-wider mb-2"
                      style={{ color: "#5B6E4A" }}
                    >
                      {t("cocktails.labels.preparation")}
                    </p>
                    <ol className="space-y-2">
                      {pasos.map((paso, i) => (
                        <li
                          key={i}
                          className="text-sm flex gap-3"
                          style={{ color: "#E4D6BF" }}
                        >
                          <span
                            className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs mt-0.5"
                            style={{
                              backgroundColor: "#3A2C20",
                              color: "#C89347",
                            }}
                          >
                            {i + 1}
                          </span>
                          <span className="pt-0.5">{paso}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <p
          className="text-center text-xs mt-10"
          style={{ color: "#6B5A45", fontFamily: "Inter, sans-serif" }}
        >
          {t("cocktails.labels.disclaimer")}
        </p>
      </div>
    </section>
  );
}
