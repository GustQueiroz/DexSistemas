import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-12 w-full flex items-center">
              <img src="./logo.avif" alt="Logo" className="w-full h-full" />
            </div>
          </div>
          <nav className="flex items-center gap-6">
            <div className="flex items-center gap-1 text-amber-500">
              <Mail className="h-4 w-4" />
              <span className="text-sm">contato@dexsistemas.com.br</span>
            </div>
            <div className="flex items-center gap-1 text-amber-500">
              <Phone className="h-4 w-4" />
              <span className="text-sm">(27) 99899-9999</span>
            </div>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="relative">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[500px] w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
                  <Image
                    src="./img1.avif"
                    alt="Gestão de Fornecedores"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 z-20 flex items-center">
                    <div className="container">
                      <h1 className="max-w-2xl text-5xl font-bold tracking-tight text-amber-500">
                        Gestão de Fornecedores, Prestadores, Opme e
                        Medicamento...
                      </h1>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-4 right-4 z-30 flex gap-2">
              <CarouselPrevious className="h-8 w-8 rounded-full bg-white/20 p-2 text-white hover:bg-white/30" />
              <CarouselNext className="h-8 w-8 rounded-full bg-white/20 p-2 text-white hover:bg-white/30" />
            </div>
            <div className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 gap-1">
              <span className="h-2 w-2 rounded-full bg-white/80"></span>
              <span className="h-2 w-2 rounded-full bg-white/40"></span>
              <span className="h-2 w-2 rounded-full bg-white/40"></span>
            </div>
          </Carousel>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-700 mb-4">
                  <span className="text-gray-600">SRM</span>
                  <span className="text-amber-500">2</span>
                </h2>
                <h3 className="text-2xl font-medium text-gray-500 mb-6">
                  SISTEMA DE REGULAÇÃO DE MATERIAIS E MEDICAMENTOS
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Nossa plataforma é modular, ou seja, você pode escolher qual
                    dos módulos atende a necessidade da sua operadora de saúde.
                  </p>
                  <p>
                    Disponibilizamos controle de OPME e Medicamento via cadastro
                    dos fornecedores e suas respectivas tabelas.
                  </p>
                  <p>
                    Faça negociação de OPME/Medicamento direto no SRM2 de forma
                    digitalizada, as negociações podem ser feitas mesmo no
                    formato não presencial, porém, a participação de todos os
                    envolvidos é registrada.
                  </p>
                  <p>
                    Controle documentos mandatórios com avisos e ações mediante
                    ao vencimento ou proximidade de vencimento.
                  </p>
                  <Button className="mt-4 bg-amber-500 hover:bg-amber-600 text-white">
                    Saiba mais...
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px]">
                <Image
                  src="./img2.avif"
                  alt="SRM2"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-3xl font-bold text-center text-gray-700 mb-12">
              Módulos Disponíveis
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Cadastro e gestão de fornecedores de OPME
                  </h3>
                  <p className="text-gray-600 mb-4">
                    O módulo de gestão permite que sua operadora organize o
                    cadastro dos fornecedores e a lista de OPME/Medicamento de
                    cada empresa.
                  </p>
                  <p className="text-gray-600 mb-4">
                    - Nossa base de dados já está no formato TUSS ou formato
                    TNUM possibilitando o cadastro dentro dos padrões legais.
                  </p>
                  <p className="text-gray-600">
                    - Em cada produto é possível incluir informações técnicas e
                    fotos dos produtos, estabelecer a composição em caso de
                    negociações em formato de kit e armazena todo histórico de
                    alteração do produto gerando a linha do tempo das suas
                    negociações.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Cotação Online
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Cotação individual por fornecedor. Chat de interação por
                    cotação.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Possibilidade de mensurar total da economia e percentual de
                    economia em cada item cotado.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Cadastro de produtos cotados com código TUSS ou TNUM.
                    Acompanhamento de múltiplas cotações de acordo com cada
                    status.
                  </p>
                  <p className="text-gray-600">
                    Sinalização por e-mail avisando que há uma cotação pendente
                    para o fornecedor. Sinalização por e-mail para Unimed da
                    resposta da cotação.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Solicitação de OPME e auditoria online
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Estabeleça uma tabela padrão de OPME e suas solicitações
                    serão feitas diretamente pelo Médico na tela do sistema com
                    todos os parâmetros definidos pela sua operadora.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Faça a auditoria on-line e envolva dinamicamente todos os
                    envolvidos no processo como médicos, fornecedores,
                    hospitais, auditoria e áreas de autorização.
                  </p>
                  <p className="text-gray-600">
                    Receba pelo sistema suas notas fiscais de OPME de acordo com
                    o parecer da sua auditoria, crie regras de prazos e
                    parâmetros que vão facilitar e agilizar seu processo diário
                    desde a autorização até o pagamento.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-700 mb-4">
                    Negociação OPME
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Inclusão on-line da lista de produtos do fornecedor.
                    Configuração da lista a ser negociada.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Coleta automatizada dos valores de cada singular se
                    necessário. Registro das etapas de negociação por fornecedor
                    e por item.
                  </p>
                  <p className="text-gray-600 mb-4">
                    Codificação da tabela de acordo com o padrão TUSS ou TNUM no
                    próprio sistema.
                  </p>
                  <p className="text-gray-600">
                    Registro dos negociadores de cada tabela (Operadora e
                    Fornecedor).
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-4xl font-bold text-center mb-16">
              <span className="text-gray-600">Alguns </span>
              <span className="text-amber-500">números</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-amber-500">+</span>
                <div>
                  <p className="text-2xl font-semibold text-gray-600">
                    70 unimeds
                  </p>
                  <p className="text-gray-500">negociam pelo SRM2</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-amber-500">+</span>
                <div>
                  <p className="text-2xl font-semibold text-gray-600">
                    1500 tabelas
                  </p>
                  <p className="text-gray-500">de OPME e Medicamento</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-amber-500">+</span>
                <div>
                  <p className="text-2xl font-semibold text-gray-600">
                    50mil produtos
                  </p>
                  <p className="text-gray-500">cadastrados</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-amber-500">+</span>
                <div>
                  <p className="text-2xl font-semibold text-gray-600">
                    1000 usuários
                  </p>
                  <p className="text-gray-500">ativos no sistema</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-amber-500">+</span>
                <div>
                  <p className="text-2xl font-semibold text-gray-600">
                    700hs de customização
                  </p>
                  <p className="text-gray-500">só em 2024</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="text-gray-600">NOSSO </span>
              <span className="text-amber-500">OBJETIVO</span>
            </h2>
            <p className="text-xl text-center text-gray-600 leading-relaxed">
              Prestar um serviço criativo e coerente dentro do prazo
              estabelecido, utilizando o que há de mais inovador em estratégias
              que viabilizem um resultado positivo e rentável.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-amber-500 to-amber-400 text-white">
          <div className="container text-center">
            <h2 className="text-3xl font-bold mb-6">
              Pronto para transformar sua gestão?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como o DEX SISTEMAS pode
              otimizar seus processos.
            </p>
            <Button className="bg-white text-amber-500 hover:bg-gray-100 hover:text-amber-600">
              Fale Conosco
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-12">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-xl font-semibold mb-4">Missão</h3>
              <p className="text-gray-300">
                Trabalhar com seriedade sem perder o foco da nossa Visão com
                empresa.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="h-24 w-24 relative">
                <div className="absolute inset-0 bg-amber-500 rounded-full opacity-20"></div>
                <div className="absolute inset-2 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-amber-500">DEX</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Visão</h3>
              <p className="text-gray-300">
                Ser reconhecida como uma empresa eficiente e diversificada no
                mercado de software customizado.
              </p>
            </div>
          </div>
          <div className="mt-10 pt-6 border-t border-gray-700 text-center text-gray-400">
            <p>DEX Sistemas - especializada em software customizado.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
