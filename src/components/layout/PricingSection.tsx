import { Check } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { pricingPlans } from "@/constant";
import { Button } from "../ui/button";

export const PricingSection = () => {
  return (
    <section id="pricing" className="mt-16 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-2">Classes & Pricing Info</h2>
      <p className="text-gray-400 mb-10 text-lg">Flexible, simple plans.</p>

    <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto text-white gap-12">
     {/* LEFT SECTION — Address / Info */}
      <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">Address</h2>
        <p className="text-sm text-gray-400 leading-relaxed whitespace-pre-line">
          MANDIR, SAI SHARAN BUILDING ROOM NUMBER 103 FLAT {'\n'}
          FIRST FLOOR OPPOSITE SAI KRISHNA SOCIETY, {'\n'}
          NEAR LOTUS BUILDING USARLI KHURD GAON DEVI, Vichumbe Rd, {'\n'}
          New Panvel East, Usarli Khurd, Maharashtra 410221 {'\n'}
          Phone: 099201 45779 {'\n'}
          Email: umaa.india@gmail.com
        </p>
      </div>

      <div className="w-full md:w-1/2 max-w-md flex flex-col md:flex-row justify-center items-center gap-8">
        {pricingPlans.map((plan, index) => (
          <Card
            key={index}
            className={`w-[280px] bg-neutral-900 border border-neutral-700 rounded-2xl shadow-lg ${
              plan.highlight ? "border-white" : ""
            }`}
          >
            <CardHeader>
              <CardTitle className="text-gray-300 text-sm mb-2">
                {plan.title}
              </CardTitle>
              <h3 className="text-4xl font-bold text-white">{plan.price}</h3>
            </CardHeader>

            <CardContent>
              <ul className="text-gray-400 text-sm mb-6 space-y-2 text-left">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-500" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-neutral-800 text-white hover:bg-neutral-700"
                }`}
              >
                {plan.buttonText}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
</section>
      
    </section>
  );
};