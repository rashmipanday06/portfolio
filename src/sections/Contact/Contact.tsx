
import { ArrowUpRight, Mail } from "lucide-react";
import Container from "../../components/UI/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Card from "../../components/UI/Card";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-zinc-900/10 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your next project."
          description="Whether you're hiring a frontend developer or looking for someone to build your next web experience, I'd love to hear from you."
        />

        <Card className="overflow-hidden">
          <div className="relative p-7 sm:p-10 lg:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full blur-3xl"
            />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-900/10">
                <Mail size={20} className="text-orange-700" />
              </div>

              <p className="mt-8 text-sm font-medium text-zinc-600">
                Email me directly
              </p>

              <a
                href="mailto:hello@rashmipanday.com"
                className="mt-2 block break-all text-2xl font-semibold tracking-tight text-zinc-900 transition-colors hover:text-orange-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 sm:text-3xl"
              >
                hello@rashmipanday.com
              </a>

              <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-600">
                Available for frontend opportunities, freelance websites, and
                selected product development work.
              </p>

              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@rashmipanday.com&su=Project%20Inquiry&body=Hi%20Rashmi%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0AThanks"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-zinc-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
              >
                Get in touch
                <ArrowUpRight size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default Contact;
