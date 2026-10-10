import { ArrowUpRight } from "lucide-react";
import Container from "../../components/UI/Container";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import Card from "../../components/UI/Card";
import Badge from "../../components/UI/Badge";
import { services } from "../../data/services";

function Services() {
  return (
    <section
      id="services"
      className="border-t border-white/5 py-24 sm:py-32"
    >
      <Container>
        <SectionHeading
          eyebrow="Services"
          title="How I can help you build."
          description="Frontend development and modern web experiences for businesses, startups, and growing products."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group p-7 sm:p-8"
            >
              <div className="flex items-start justify-between gap-6">
                <span className="text-sm text-zinc-600">
                  0{index + 1}
                </span>

                <ArrowUpRight
                  size={20}
                  className="text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-400"
                />
              </div>

              <h3 className="mt-10 text-xl font-semibold tracking-tight text-white">
                {service.title}
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-zinc-400">
                {service.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {service.technologies.map((technology) => (
                  <Badge key={technology}>{technology}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-7 sm:p-9">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm text-zinc-500">
                Have a project in mind?
              </p>

              <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Let's build something valuable.
              </h3>
            </div>

            <a
              href="#contact"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Services;