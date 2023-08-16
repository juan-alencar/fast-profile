import './styles.css'
import Btn from '@/components/Btn'
import ProjectCard from '@/components/ProjectCard'
import { User } from '@/types/User'
import { ArrowSmallRightIcon, MoonIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

import { IoChatbubbleSharp } from 'react-icons/io5'

import {
  DiAngularSimple,
  DiDjango,
  DiDocker,
  DiGit,
  DiJava,
  DiJavascript,
  DiLaravel,
  DiMysql,
  DiNodejs,
  DiPostgresql,
  DiPython,
  DiReact,
  DiCss3,
  DiHtml5,
} from 'react-icons/di'

import {
  SiSpring,
  SiFigma,
  SiPostman,
  SiStyledcomponents,
  SiTypescript,
  SiLinkedin,
  SiWhatsapp,
  SiGithub,
} from 'react-icons/si'
import TimeLine from '@/components/TimeLine'
import InfiniteLooper from '@/components/InfiniteScroller'
import CompetenceCard from '@/components/CompetenceCard'
import FeedbackCard from '@/components/FeedbackCard'
import Input from '@/components/Input'

export default async function Home({
  params,
}: {
  params: { username: string }
}) {
  const response = await fetch(
    `${process.env.API_BASE_URL}user/${params.username}`,
  )
  const user: User = await response.json()
  const icons = [
    DiAngularSimple,
    DiDjango,
    DiDocker,
    DiGit,
    DiJava,
    DiJavascript,
    DiLaravel,
    DiMysql,
    DiNodejs,
    DiPostgresql,
    DiPython,
    DiReact,
    DiCss3,
    DiHtml5,
    SiSpring,
    SiFigma,
    SiPostman,
    SiStyledcomponents,
    SiTypescript,
  ]

  return (
    <main className="flex flex-col max-w-5xl mx-auto gap-16 py-8">
      <header>
        <nav className="flex w-full justify-between">
          <ol className="flex gap-6 items-center">
            <li>
              <Btn variant="iconPrimary">
                <MoonIcon className="h-5 w-5" />
              </Btn>
            </li>
            <li>
              <Link href={'#Projetos'}>Projetos</Link>
            </li>
            <li>
              <Link href={'#Experiencias'}>Experiencias</Link>
            </li>
            <li>
              <Link href={'#Competências'}>Competências</Link>
            </li>
          </ol>
          <ol className="flex gap-2">
            <li>
              <Btn variant="iconPrimary">
                <SiWhatsapp className="h-5 w-5" />
              </Btn>
            </li>
            <li>
              <Btn variant="iconPrimary">
                <SiLinkedin className="h-5 w-5" />
              </Btn>
            </li>
            <li>
              <Btn variant="iconPrimary">
                <SiGithub className="h-5 w-5" />
              </Btn>
            </li>
          </ol>
        </nav>
      </header>
      <section className="flex flex-col gap-4 items-start">
        <h1 className="text-6xl font-black">Juan Alencar</h1>
        <h2 className="text-purple-500 text-2xl font-bold uppercase">
          Desenvolvedor de Software
        </h2>
        <p className="text-gray-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam,
          beatae in. Tempore quae accusamus eveniet impedit quos, sit laudantium
          qui iure non dicta officia facere distinctio, repudiandae totam
          consectetur id.
        </p>
        <Btn>Entre em Contato</Btn>
      </section>

      <section className="flex flex-col gap-8">
        <div>
          <h1 className="font-bold text-2xl">Projetos</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            eveniet nulla aliquam libero amet quis consectetur placeat, a itaque
            ad voluptas tempora iusto tenetur eum assumenda eaque pariatur at
            quaerat?
          </p>
        </div>
        <div className="flex grid-cols-3 gap-6">
          {user &&
            user.projects.map(
              ({
                id,
                title,
                description,
                imageUrl,
                productionUrl,
                repository,
              }) => (
                <ProjectCard
                  key={id}
                  title={title}
                  description={description}
                  imageUrl={imageUrl}
                  productionUrl={productionUrl}
                  repository={repository}
                />
              ),
            )}
        </div>
        <div>
          <Btn>
            Ver mais <ArrowSmallRightIcon className="h-4 w-4" />
          </Btn>
        </div>
      </section>
      <section className="flex flex-col gap-8">
        <div>
          <h1 className="font-bold text-2xl">Tecnologias</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            eveniet nulla aliquam libero amet quis consectetur placeat, a itaque
            ad voluptas tempora iusto tenetur eum assumenda eaque pariatur at
            quaerat?
          </p>
        </div>
        <InfiniteLooper speed={32} direction="left">
          {icons.map((icon) => icon({ className: 'icon fill-purple-600' }))}
        </InfiniteLooper>
      </section>
      <section>
        <div className="mb-8">
          <h1 className="font-bold text-2xl">Currículo</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            eveniet nulla aliquam libero amet quis consectetur placeat, a itaque
            ad voluptas tempora iusto tenetur eum assumenda eaque pariatur at
            quaerat?
          </p>
        </div>
        <div className="flex gap-12">
          <TimeLine props="teste" />
          <div className="w-4/5 border-l-2 border-purple-600 h-fit pl-4 py-2">
            <h2 className="text-purple-600 font-bold">Sobre</h2>
            <p className="text-gray-400 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt
              ipsa aspernatur ullam exercitationem atque voluptatibus, odit
              obcaecati officia iste necessitatibus, error voluptatem a fugiat
              perferendis inventore non accusantium eum dolorem!
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="mb-8">
          <h1 className="font-bold text-2xl">Competências</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            eveniet nulla aliquam libero amet quis consectetur placeat, a itaque
            ad voluptas tempora iusto tenetur eum assumenda eaque pariatur at
            quaerat?
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <CompetenceCard props="teste" />
          <CompetenceCard props="teste" />
          <CompetenceCard props="teste" />
          <CompetenceCard props="teste" />
          <CompetenceCard props="teste" />
          <CompetenceCard props="teste" />
          <CompetenceCard props="teste" />
        </div>
      </section>

      <section>
        <div className="mb-8">
          <div className="flex justify-between w-full items-center mb-2">
            <h1 className="font-bold text-2xl">Feedbacks</h1>
            <Btn>
              <IoChatbubbleSharp /> Deixar Feedback
            </Btn>
          </div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            eveniet nulla aliquam libero amet quis consectetur placeat, a itaque
            ad voluptas tempora iusto tenetur eum assumenda eaque pariatur at
            quaerat?
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <FeedbackCard props="teste" />
          <FeedbackCard props="teste" />
          <FeedbackCard props="teste" />
        </div>
      </section>

      <section>
        <div className="mb-8">
          <div className="flex justify-between w-full items-center mb-2">
            <h1 className="font-bold text-2xl">Contatos</h1>
            <div className="flex gap-2">
              <Btn variant="iconPrimary">
                <SiLinkedin className="h-5 w-5" />
              </Btn>
              <Btn variant="iconPrimary">
                <SiWhatsapp className="h-5 w-5" />
              </Btn>
            </div>
          </div>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            eveniet nulla aliquam libero amet quis consectetur placeat, a itaque
            ad voluptas tempora iusto tenetur eum assumenda eaque pariatur at
            quaerat?
          </p>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col w-full gap-4 bg-gray-900 rounded-2xl p-8">
            <h4 className="font-bold text-lg">Me envia uma mensagem</h4>
            <Input HTMLType="text" placeholder="Nome" />
            <textarea
              className="bg-gray-700 rounded-md h-full px-4 py-2 resize-none"
              name="teste"
              id=""
              placeholder="Mensagem"
            />
            <Btn className="justify-center">Enviar</Btn>
          </div>
          <div className="w-2 bg-gray-900 rounded-full"></div>
          <div className="flex flex-col w-full gap-4 bg-gray-900 rounded-2xl p-8">
            <h4 className="font-bold text-lg">Ou então, eu falo com você</h4>
            <Input HTMLType="text" placeholder="Nome" />
            <Input HTMLType="text" placeholder="Email" />
            <Input HTMLType="text" placeholder="Número de Telefone" />
            <Btn className="justify-center">Enviar</Btn>
          </div>
        </div>
      </section>
      <footer className="w-full text-center text-gray-400">
        <p>© 2023 Juan Alencar. Todos os direitos reservados.</p>
      </footer>
    </main>
  )
}
