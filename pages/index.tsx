import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.scss";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dr. Alexis</title>
      </Head>

      <main className={styles.hero_section}>
        <div className={styles.navbar}>
          <div className={styles.logo}>
            <span>Dr. Alexis</span>
            <Image src="/plus.svg" alt="plus" width={24} height={24} />
          </div>

          <nav>
            <ul>
              <li>
                <a href="#" className={styles.active}>
                  Home
                </a>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>

          <button
            onClick={() => {
              window.location.href = "#our_services";
            }}
          >
            <Image src="/medical.svg" alt="pasient" width={24} height={24} />
            Ver Especialidades
          </button>
        </div>

        <div className={styles.container}>
          <div className={styles.principal}>
            <h1>Endocrinologia e Metabologia em Pouso Alegre</h1>
            <p>
              Cuide hoje mesmo da sua saúde, faça um agendamento com nossos
              especialistas!{" "}
            </p>
            <button>
              <Image src="/pasient.svg" alt="pasient" width={24} height={24} />
              Agendar Consulta
            </button>
          </div>

          <Image
            src="/doctor.png"
            alt="doctor"
            width={500}
            height={600}
            objectFit="cover"
          />
        </div>
      </main>

      <section className={styles.partners_section}>
        <h2>Parceiros</h2>
        <div className={styles.partners}>
          {[1, 2, 3, 4, 5].map((item) => (
            <img
              src={`/partners/partner${item}.png`}
              alt="partner"
              key={item}
            />
          ))}
        </div>
      </section>

      <section className={styles.our_services} id="our_services">
        <div className={styles.container}>
          <div className={styles.header}>
            <h2>Nossos Serviços</h2>
            <p>
              O Dr. Alexis é atuante em endocrinologia além de especialista em
              escleroterapia!
            </p>
          </div>

          <div className={styles.services}>
            <div className={styles.service_card}>
              <Image
                src="/services/service1.svg"
                alt="service"
                width={80}
                height={80}
              />
              <div className={styles.content}>
                <h3>Endocrinologia</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quod, quia, voluptas, voluptate quae voluptates
                  quibusdam voluptatum quidem quos quas quia, voluptates
                  quibusdam voluptatum quidem quos quas quia.
                </p>
              </div>
              <button>
                <Image src="/whatsapp.svg" alt="whats" width={24} height={24} />
                Agendar
              </button>
            </div>
            <div className={styles.service_card}>
              <Image
                src="/services/service2.svg"
                alt="service"
                width={80}
                height={80}
              />
              <div className={styles.content}>
                <h3>Endocrinologia</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quod, quia, voluptas, voluptate quae voluptates
                  quibusdam voluptatum quidem quos quas quia, voluptates
                  quibusdam voluptatum quidem quos quas quia.
                </p>
              </div>
              <button>
                <Image src="/whatsapp.svg" alt="whats" width={24} height={24} />
                Agendar
              </button>
            </div>
            <div className={styles.service_card}>
              <Image
                src="/services/service3.svg"
                alt="service"
                width={80}
                height={80}
              />
              <div className={styles.content}>
                <h3>Endocrinologia</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quisquam quod, quia, voluptas, voluptate quae voluptates
                  quibusdam voluptatum quidem quos quas quia, voluptates
                  quibusdam voluptatum quidem quos quas quia.
                </p>
              </div>
              <button>
                <Image src="/whatsapp.svg" alt="whats" width={24} height={24} />
                Agendar
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.our_clinic}>
        <div className={styles.container}>
          <Image src="/clinic.png" width={523} height={405} alt="clinic" />
          <div className={styles.content}>
            <h2>Nossa Clínica</h2>
            <p>
              Situada em Pouso Alegre - MG, perto do centro, com uma ótima
              localização, venha nos fazer uma visita e se surpreender com os
              nosssos serviços{" "}
            </p>
            <button>
              <Image src="/whatsapp.svg" alt="whats" width={24} height={24} />
              Agendar
            </button>
          </div>
        </div>
      </section>

      <section className={styles.our_space}>
        <div className={styles.container}>
          <div className={styles.content}>
            <h2>Instalações de luxo humanizadas</h2>
            <p>
              O melhor atendimento na melhor clínica da região, venha conferir!
            </p>
            <button>
              <Image src="/whatsapp.svg" alt="whats" width={24} height={24} />
              Agendar
            </button>
          </div>
          <Image src="/space.png" width={518} height={510} alt="clinic" />
        </div>
      </section>

      <section className={styles.marketing}>
        <div className={styles.container}>
          <h2>Faça um agendamento agora mesmo!</h2>
          <p>Entre em contato para marcar um agendamento com o Dr. Alexis!</p>
          <div className={styles.buttons}>
            <button className={styles.calendarButton}>
              <Image src="/calendar.svg" alt="whats" width={24} height={24} />
              Calendário
            </button>
            <button className={styles.whatsButton}>
              <Image
                src="/whatsappBlue.svg"
                alt="whats"
                width={24}
                height={24}
              />
              Agendar
            </button>
          </div>
        </div>
      </section>

      <section className={styles.testimonial}>
        <div className={styles.container}>
          <h2>O que nossos pacientes dizem</h2>
          <p className={styles.description}>
            O hospital é parte integrante de uma organização social e de saúde
            com a função de prestar serviços integrais (abrangentes).
          </p>
          <div className={styles.testimonials}>
            <div className={styles.testimonial_card}>
              <p className={styles.testimonial_text}>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className={styles.testimonial_pacient}>
                <Image
                  src="/pacient.png"
                  width={50}
                  height={50}
                  alt="pacient"
                />
                <div className={styles.pacient_info}>
                  <h3>John Doe</h3>
                  <p>CEO at Google</p>
                </div>
              </div>
            </div>
            <div className={styles.testimonial_card}>
              <p className={styles.testimonial_text}>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className={styles.testimonial_pacient}>
                <Image
                  src="/pacient.png"
                  width={50}
                  height={50}
                  alt="pacient"
                />
                <div className={styles.pacient_info}>
                  <h3>John Doe</h3>
                  <p>CEO at Google</p>
                </div>
              </div>
            </div>
            <div className={styles.testimonial_card}>
              <p className={styles.testimonial_text}>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className={styles.testimonial_pacient}>
                <Image
                  src="/pacient.png"
                  width={50}
                  height={50}
                  alt="pacient"
                />
                <div className={styles.pacient_info}>
                  <h3>John Doe</h3>
                  <p>CEO at Google</p>
                </div>
              </div>
            </div>
            <div className={styles.testimonial_card}>
              <p className={styles.testimonial_text}>
                Click edit button to change this text. Lorem ipsum dolor sit
                amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                ullamcorper mattis, pulvinar dapibus leo.
              </p>
              <div className={styles.testimonial_pacient}>
                <Image
                  src="/pacient.png"
                  width={50}
                  height={50}
                  alt="pacient"
                />
                <div className={styles.pacient_info}>
                  <h3>John Doe</h3>
                  <p>CEO at Google</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.main}>
            <div className={styles.content}>
              <div className={styles.logo}>
                <span>Dr. Alexis</span>
                <Image src="/plus.svg" alt="plus" width={24} height={24} />
              </div>
              <p>
                Jl. Lebak Bulus I Kav. 29 Cilandak Jakarta Selatan, DKI Jakarta,
                Indonesia 12340
              </p>
              <div className={styles.socials}>
                <Image src="/facebook.svg" alt="plus" width={24} height={24} />
                <Image src="/youtube.svg" alt="plus" width={24} height={24} />
                <Image src="/whatsapp.svg" alt="plus" width={24} height={24} />
              </div>
            </div>
            <div className={styles.informacoes}>
              <h3>Informações</h3>
              <ul>
                <li>Home</li>
                <li>Serviços</li>
                <li>Clínica</li>
                <li>Contato</li>
              </ul>
            </div>
            <div className={styles.contact}>
              <h3>Contato</h3>
              <ul>
                <li>Telefone: (35) 9 9999-9999</li>
                <li>
                  Email:
                  <a href="mailto:pascal@email.com">email</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.copyright}>
            <span>Copyright © PascalTech 2022</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
