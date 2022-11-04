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
    </div>
  );
}
