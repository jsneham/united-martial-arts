import { ContactForm } from "@/components/layout/ContactFormSection"

export const Contact = () => {
  
    return (
    <section className="flex flex-col md:flex-row items-center justify-between mt-16 max-w-7xl mx-auto text-white gap-12 px-6">
      {/* LEFT SECTION — Address / Info */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Address</h2>
        <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">
          MANDIR, SAI SHARAN BUILDING ROOM NUMBER 103 FLAT {'\n'}
          FIRST FLOOR OPPOSITE SAI KRISHNA SOCIETY, {'\n'}
          NEAR LOTUS BUILDING USARLI KHURD GAON DEVI, Vichumbe Rd, {'\n'}
          New Panvel East, Usarli Khurd, Maharashtra 410221 {'\n'}
          Phone: 099201 45779 {'\n'}
          Email: contact@unitedmartialarts.com
        </p>
      </div>

      {/* RIGHT SECTION — Contact Form */}
      <div className="w-full md:w-1/2 max-w-md">
        <ContactForm/>
      </div>
    </section>
  )
}
