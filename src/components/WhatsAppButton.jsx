import { MessageCircle } from "lucide-react";

const whatsappUrl = "https://wa.me/23560821818?text=Bonjour%20MARFAER%20GROUPE%2C%20je%20souhaite%20vous%20parler%20de%20mon%20projet.";

export default function WhatsAppButton() {
  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label="Contacter MARFAER GROUPE sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg shadow-[#25d366]/30 transition hover:scale-105 hover:bg-[#1ebe5b]"
    >
      <MessageCircle size={27} strokeWidth={2.25} />
    </a>
  );
}
