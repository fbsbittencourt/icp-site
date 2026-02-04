// Workflow GIT:
// Fazer o Fork.
// Criar a branch: git checkout -b feature/pagina-transparencia-nomedoaluno.
// Desenvolver apenas dentro do arquivo src/pages/Transparencia.jsx.
// Adicionar, comitar e fazer o Push.
// Fazer o Pull Request para o repositório original.

import React from 'react';
import Template from './Template';



const Transparencia = () => (
    <Template title="Transparência">
        <div className="space-y-6">
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
                O Instituto Casa do Pai, fundado em 2007, atua em Itaguaí – RJ com o compromisso de promover transformação social por meio de ações responsáveis e transparentes. Ao longo dos anos, o instituto consolidou seu trabalho em diversas áreas estratégicas, como Educação, Empreendedorismo, Esporte, Tecnologia, Meio Ambiente e Defesa Animal, sempre com foco no impacto positivo e duradouro para a comunidade. Nossa missão é gerar oportunidades reais, promover inclusão social e contribuir para o desenvolvimento humano e sustentável, pautando todas as atividades pela ética, integridade e respeito às pessoas.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
                A transparência é um dos pilares fundamentais do Instituto Casa do Pai. Por isso, mantemos uma gestão rigorosa e alinhada às melhores práticas de governança, com prestação de contas clara e acessível. Todas as ações e recursos são monitorados e registrados, garantindo que cada etapa dos projetos seja acompanhada de forma responsável e auditável. Além disso, contamos com certificações e conformidade legal que comprovam nossa seriedade institucional e o compromisso com a correta aplicação dos recursos recebidos.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed text-justify">
                A confiança da sociedade, parceiros, apoiadores e órgãos públicos é essencial para a continuidade do nosso trabalho. Por isso, reforçamos o compromisso de manter uma comunicação aberta e transparente sobre nossas atividades, resultados e investimentos. Ao disponibilizar informações completas sobre projetos, convênios e prestação de contas, buscamos fortalecer a credibilidade e demonstrar que cada contribuição é utilizada com responsabilidade, sempre em prol do bem-estar social e do desenvolvimento da comunidade de Itaguaí e região.
            </p>

            <div className="mt-16 w-full flex justify-center pb-8">
                <div className="group w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl border border-slate-100 p-10 hover:shadow-blue-200/50 hover:-translate-y-2 transition-all duration-500">
                    <div className="flex flex-col items-center text-center space-y-8">
                        {/* Icon Container */}
                        <div className="relative">
                            <div className="w-24 h-24 bg-green-50 rounded-3xl flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-all duration-500 shadow-inner">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17v-2m3 2v-4m3 2v-6m1 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                            </div>
                            <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-white rounded-xl shadow-lg flex items-center justify-center text-green-600 font-black text-[10px] border border-slate-50">
                                XLSX
                            </div>
                        </div>

                        {/* Download Link */}
                        <a
                            href="https://www.institutocasadopai.org.br/_files/ugd/2b6395_6fef996d38e940bc860808e36bb765b4.xlsx?dn=e08684a4-7dee-48a6-8a67-94784bf3898d.xlsx"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-4 w-full py-5 px-8 bg-green-600 text-white font-black rounded-2xl hover:bg-green-700 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-xl shadow-green-200"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Planilha de Projetos
                        </a>

                    </div>
                </div>
            </div>
        </div>
    </Template>
);


export default Transparencia;
