import TermsOfServiceModal from "@/components/terms-of-service-modal/TermsOfServiceModal";
import { useState } from "react";

export default function TermsOfService() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
          <div className="container grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Terms of Service</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                Our terms and conditions outline the rules and regulations for the use of Acme Inc's Website.
              </p>
            </div>
            <div className="flex space-x-4 lg:justify-end">
              <button
                onClick={()=>setIsOpen(true)}
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              >
                Accept Terms
              </button>
            </div>
          </div>
        </section>
      </main>
      <TermsOfServiceModal isOpen={isOpen} onClose={()=>setIsOpen(false)} />
      </>
  )
}
