import { Button } from "@/components/ui/button";
import { Phone, MapPin, Hammer } from "lucide-react";

/**
 * Design Philosophy: Professional & Modern
 * - Clean, modern layout with strong visual hierarchy
 * - Blue accent colors reflecting the logo's professional tone
 * - High-quality images showcasing the work
 * - Clear CTAs for WhatsApp contact
 */

export default function Home() {
  const whatsappNumber = "5511992084968";
  const whatsappMessage = "Olá! Gostaria de mais informações sobre os serviços de forro PVC e Drywall.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img
            src="/assets/logo.png"
            alt="MV Forros Logo"
            className="h-[83px] object-contain"
          />
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Phone className="w-4 h-4 mr-2" />
              Contato
            </a>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <img
                src="/assets/avatar-empresa.png"
                alt="Avatar MV Forros"
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-blue-600 shadow-xl object-cover"
              />
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight text-center md:text-left">
                Forro PVC e Drywall de Qualidade
              </h1>
            </div>
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              Transformamos seus ambientes com soluções profissionais em forro PVC e divisórias em Drywall. Instalação e venda de materiais em Itaquaquecetuba e região.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5 mr-2" />
                  Solicitar Orçamento
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-300 text-gray-900 hover:bg-gray-50"
              >
                Saiba Mais
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Nossos Serviços
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* PVC Service */}
            <div className="flex flex-col">
              <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/assets/forro-pvc.jpg"
                  alt="Forro PVC"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Hammer className="w-6 h-6 text-blue-600" />
                Forro PVC
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Forros em PVC de alta qualidade, duráveis e fáceis de limpar. Ideais para cozinhas, banheiros e áreas molhadas. Instalação profissional com acabamento perfeito.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 mt-auto"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Mais Informações
                </a>
              </Button>
            </div>

            {/* Drywall Service */}
            <div className="flex flex-col">
              <div className="mb-6 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="/assets/drywall.jpg"
                  alt="Drywall"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Hammer className="w-6 h-6 text-blue-600" />
                Divisórias Drywall
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Divisórias em Drywall para ambientes internos. Acabamento liso e profissional, com excelente isolamento acústico. Solução versátil para reformas e construções.
              </p>
              <Button
                asChild
                variant="outline"
                className="w-full border-blue-600 text-blue-600 hover:bg-blue-50 mt-auto"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Mais Informações
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            Trabalhos Realizados
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <img
                src="/assets/projeto-1.jpg"
                alt="Projeto de Forro"
                className="w-full h-80 object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Entre em Contato
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Location */}
            <div className="text-center">
              <MapPin className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Localização</h3>
              <p className="text-blue-100">
                Rua Cardoso, 45<br />
                Vila Virgínia<br />
                Itaquaquecetuba - SP
              </p>
            </div>

            {/* Service Area */}
            <div className="text-center">
              <Hammer className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Área de Atendimento</h3>
              <p className="text-blue-100">
                Itaquaquecetuba<br />
                e Região
              </p>
            </div>

            {/* Contact */}
            <div className="text-center">
              <Phone className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">WhatsApp</h3>
              <p className="text-blue-100">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
                  (11) 99208-4968
                </a>
              </p>
            </div>
          </div>

          <div className="text-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5 mr-2" />
                Fale Conosco no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-2">
            <strong className="text-white">MV Forros</strong> - Forro PVC e Drywall
          </p>
          <p>CNPJ: 28.258.878/0001-40</p>
          <p className="text-sm mt-4">© 2026 MV Forros. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
