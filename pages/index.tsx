import Head from "next/head";
import Image from "next/image";
import styles from "../styles/index.module.scss";

export default function Home() {
  const handleGetInTouch = () => {
    const whats = "5535998709895";
    const message = "Olá, gostaria de agendar uma consulta!";

    window.open(`https://wa.me/${whats}?text=${message}`, "_blank");
  };

  const handleVisualizeClinic = () => {
    const link = "https://www.instagram.com/centromedicopousoalegre/";
    window.open(link, "_blank");
  };

  const handleGetInTouchWithInstagram = () => {
    const link = "https://www.instagram.com/alexis.rojas74/";

    window.open(link, "_blank");
  };

  const questions = [
    {
      question: "Qual é a sua especialização?",
      answer:
        "Eu sou um médico especialista em endocrinologia e metabologia. Eu também sou especialista em escleroterapia.",
    },
    {
      question:
        "Você trata de condições relacionadas ao sistema endócrino, como diabetes ou transtornos da tireoide?",
      answer:
        "Sim, eu trato de condições relacionadas ao sistema endócrino, como diabetes ou transtornos da tireoide.",
    },
    {
      question:
        "Posso ter um teste de sangue para verificar meus níveis hormonais?",
      answer:
        "Sim, você pode ter um teste de sangue para verificar seus níveis hormonais.",
    },
    {
      question:
        "Você prescreve medicamentos para tratar condições relacionadas ao sistema endócrino?",
      answer:
        "Sim, eu prescrevo medicamentos para tratar condições relacionadas ao sistema endócrino.",
    },
    {
      question:
        "Qual é o seu conselho sobre dieta e estilo de vida para ajudar a gerenciar minha condição?",
      answer:
        "Meu conselho sobre dieta e estilo de vida é para ajudar a gerenciar sua condição.",
    },
    {
      question:
        "Você pode realizar ou indicar testes adicionais, como uma tomografia computadorizada ou ressonância magnética, se necessário?",
      answer: "Sim, eu posso realizar ou indicar testes adicionais.",
    },
    {
      question:
        "Posso precisar ser referido a outro especialista para tratamento adicional?",
      answer:
        "Sim, você pode precisar ser referido a outro especialista para tratamento adicional.",
    },
  ];

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

          {/* <nav>
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
          </nav> */}

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
            <button onClick={handleGetInTouch}>
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
        {/* <h2>Parceiros</h2>
        <div className={styles.partners}>
          {[1, 2, 3, 4, 5].map((item) => (
            <img
              src={`/partners/partner${item}.png`}
              alt="partner"
              key={item}
            />
          ))}
        </div> */}
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
              {/* <button>
                <Image src="/whatsapp.svg" alt="whats" width={24} height={24} />
                Agendar
              </button> */}
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
              {/* <button>
                <Image src="/whatsapp.svg" alt="whats" width={24} height={24} />
                Agendar
              </button> */}
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
              {/* <button>
                <Image src="/whatsapp.svg" alt="whats" width={24} height={24} />
                Agendar
              </button> */}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.our_clinic} id="our_clinic">
        <div className={styles.container}>
          <Image src="/clinic.jpeg" width={523} height={405} alt="clinic" />
          <div className={styles.content}>
            <h2>Nossa Clínica</h2>
            <p>
              Situada em Pouso Alegre - MG, a maior Clínica Médica do Sul de
              Minas, com uma ótima localização, venha nos fazer uma visita e se
              surpreender com os nosssos serviços{" "}
            </p>
            <button onClick={handleVisualizeClinic}>
              <Image src="/eye.svg" alt="whats" width={24} height={24} />
              Visualizar Clínica
            </button>
          </div>
        </div>
      </section>

      {/* <section className={styles.our_space}>
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
      </section> */}

      <section className={styles.marketing}>
        <div className={styles.container}>
          <h2>Faça um agendamento agora mesmo!</h2>
          <p>Entre em contato para marcar um agendamento com o Dr. Alexis!</p>
          <div className={styles.buttons}>
            <button className={styles.calendarButton}>
              <Image src="/calendar.svg" alt="whats" width={24} height={24} />
              Calendário
            </button>
            <button className={styles.whatsButton} onClick={handleGetInTouch}>
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
            {/* <div className={styles.testimonial_card}>
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
            </div> */}
          </div>
        </div>
      </section>

      <section className={styles.frequently_asked_questions}>
        <div className={styles.container}>
          <h2>Perguntas Frequentes</h2>
          <p className={styles.description}>
            O que nossos clientes perguntam sobre nossos serviços
          </p>
          <div className={styles.frequently_asked_questions}>
            <div className={styles.accordionMenu}>
              <ul>
                {questions.map((question, index) => (
                  <li key={index}>
                    {/* default checked */}
                    <input type="checkbox" defaultChecked={true} />
                    <i className={styles.arrow}></i>
                    <h2
                      style={{
                        marginRight: "20px",
                      }}
                    >
                      <i
                        className={"fas fa-question"}
                        style={{
                          marginRight: "20px",
                        }}
                      />
                      {question.question}
                    </h2>
                    <p>{question.answer}</p>{" "}
                  </li>
                ))}
                {/* <li>
                  <input type="checkbox" />
                  <i className={styles.arrow}></i>
                  <h2
                    style={{
                      marginRight: "20px",
                    }}
                  >
                    <i
                      className={"fas fa-question"}
                      style={{
                        marginRight: "20px",
                      }}
                    />
                    Qual é a sua especialização?
                  </h2>
                  <p>This UI was written in HTML and CSS.</p>
                </li> */}
              </ul>
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
                Salvador dos Santos Nora, 25 Santa Dorotéia Pouso Alegre - MG
              </p>
              <div className={styles.socials}>
                <button onClick={handleGetInTouchWithInstagram}>
                  <Image
                    src="/instagram.svg"
                    alt="plus"
                    width={24}
                    height={24}
                  />
                </button>
              </div>
            </div>
            <div className={styles.informacoes}>
              <h3>Informações</h3>
              <ul>
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#our_services">Serviços</a>
                </li>
                <li>
                  <a href="#our_clinic">Clínica</a>
                </li>
              </ul>
            </div>
            <div className={styles.contact}>
              <h3>Contato</h3>
              <ul>
                <li>Telefone: +55 (35) 99870-9895 </li>
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
