import { ArrowUpRight, Mail } from "lucide-react";
import Container from "../../components/UI/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Card from "../../components/UI/Card";

function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/5 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let's talk about your next project."
          description="Whether you're hiring a frontend developer or looking for someone to build your next web experience, I'd love to hear from you."
        />

        <Card className="overflow-hidden">
          <div className="relative p-7 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04]">
                <Mail size={20} className="text-violet-400" />
              </div>

              <p className="mt-8 text-sm text-zinc-500">
                Email me directly
              </p>

              <a
                href="mailto:hello@rashmipanday.com"
                className="mt-2 block break-all text-2xl font-semibold tracking-tight text-white transition-colors hover:text-violet-400 sm:text-3xl"
              >
                hello@rashmipanday.com
              </a>

              <p className="mt-5 max-w-xl text-sm leading-6 text-zinc-400">
                Available for frontend opportunities, freelance websites, and
                selected product development work.
              </p>

<a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=hello@rashmipanday.com&su=Project%20Inquiry&body=Hi%20Rashmi%2C%0A%0AI%20would%20like%20to%20discuss%20a%20project%20with%20you.%0A%0AThanks"
  target="_blank"
  rel="noreferrer"
  className="mt-8 inline-flex items-center gap-2 rounded-full bg-violet-500 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-violet-400"
>
  Get in touch
  <ArrowUpRight size={16} />
</a>
            </div>
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default Contact;