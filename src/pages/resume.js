import * as React from 'react';
import Layout from '../components/Layout';
import SEO from '../components/SEO';
import TitleBlock from '../components/TitleBlock';

export default function Resume() {
  return (
    <Layout>
      <SEO title="Resume" />
      <div className="max-w-7xl p-4 mx-auto md:px-8">
        <TitleBlock
          pageTitle="My resume"
          shortDescription="I have more than a decade of experience working on digital products in various design, development, leadership, and educator roles."
        />

        <a
          href="WaylonBaumgardnerResume.pdf"
          type="button"
          title="Download Waylon Baumgardner resume in PDF format"
        >
          <button
            type="button"
            className="cta bg-accent hover:after:content-['→'] dark:bg-dark-heading-text text-white dark:text-black py-2 px-4 mt-6 text-base font-defaultSans"
          >
            Download my resume (PDF)
          </button>
        </a>

        <div className="mx-auto grid grid-cols-3 gap-12 w-full">
          <div className="col-span-2">
            <h2>Professional Experience</h2>
            <section className="my-8">
              <h3 className="mt-2 font-semibold text-text text-base">
                Senior Product Designer
              </h3>
              <h4 className="text-left mt-1 text-text dark:text-dark-text text-base font-normal">
                Matterport
              </h4>
              <h5 className="mt-1 italic text-base dark:text-dark-text">
                Aug. 2021 &ndash; Present
              </h5>
              <p className="font-defaultSans my-2 text-base">
                I led the design vision and helped set design direction for
                e-commerce. I designed new features and redesigned existing
                features to increase purchase conversion and simplify checkout.
                I presented design work. I built design prototypes. I
                collaborated with cross-functional partners in product,
                marketing, and engineering. I participated in planning and
                conducting user research. I also coached junior product
                designers.
              </p>
            </section>
            <section className="my-8">
              <h3 className="mt-2 font-semibold text-text text-base">
                Senior UX Strategist
              </h3>
              <h4 className="text-left mt-1 text-text dark:text-dark-text text-base font-normal">
                Esri
              </h4>
              <h5 className="mt-1 italic text-base dark:text-dark-text">
                Jan. 2021 &ndash; Aug. 2021
              </h5>
              <p className="font-defaultSans my-2 text-base">
                I defined the UX strategy for e-commerce experiences. I led UX
                design on a cross-functional e-commerce team charged with
                generating seven-figure annual revenue. I created UX
                deliverables such as competitive analyses, wireframes, journey
                maps, and user flows. I managed one UX designer and mentored
                junior designers.
              </p>
            </section>
            <section className="my-8">
              <h3 className="mt-2 font-semibold text-text text-base">
                Senior UX Designer
              </h3>
              <h4 className="text-left mt-1 text-text dark:text-dark-text text-base font-normal">
                Esri
              </h4>
              <h5 className="mt-1 italic text-base dark:text-dark-text">
                Sep. 2019 &ndash; Jan. 2021
              </h5>
              <p className="font-defaultSans my-2 text-base">
                I created design solutions to solve e-commerce problems. I
                served as primary UX designer on cross-functional e-commerce
                team with business analysts, product marketers, and software
                engineers. I authored user tests, facilitated workshops, and
                moderated usability studies. I wrote copy for error messages and
                buttons. I developed e-commerce design principles. I mentored
                junior UX designers.
              </p>
            </section>
            <section className="my-8">
              <h3 className="mt-2 font-semibold text-text text-base">
                Director of Web Development
              </h3>
              <h4 className="text-left mt-1 text-text dark:text-dark-text text-base font-normal">
                California Baptist University
              </h4>
              <h5 className="mt-1 italic text-base dark:text-dark-text">
                July 2018 &ndash; Sep. 2019
              </h5>
              <p className="font-defaultSans my-2 text-base">
                I directly managed four full-stack web developers. I project
                managed over 15 digital products. I established a visual design
                system to foster user-centered design thinking. I established an
                iterative development environment to speed up development and
                increase collaboration. I designed wireframes, UI components,
                and site maps. I provided thought leadership on strategic and
                tactical IT decisions with companywide impact. I collaborated
                with stakeholders from various business units and presented to
                key decision makers including C-Suite.
              </p>
            </section>
            <section className="my-8">
              <h3 className="mt-2 font-semibold text-text text-base">
                Senior Web Services Manager
              </h3>
              <h4 className="text-left mt-1 text-text dark:text-dark-text text-base font-normal">
                California Baptist University
              </h4>
              <h5 className="mt-1 italic text-base dark:text-dark-text">
                Feb. 2012 &ndash; July 2018
              </h5>
              <p className="font-defaultSans my-2 text-base">
                I managed in a player-coach capacity two full-time employees
                (web developer and content designer) responsible for 8 digital
                products serving 1.5 million annual unique visitors. I designed
                web pages including wireframes and UI mockups. I wrote copy
                including microcopy for buttons and navigation menus. I
                developed web pages using front-end technologies. I project
                managed multiple projects, including a university website
                redesign completed in under 10 months. I authored and moderated
                usability studies. I collaborated cross-functionally with
                digital marketers, print designers, and other stakeholders. I
                negotiated contracts and oversaw deployments of third-party
                vendor products/services.
              </p>
            </section>
            <section className="my-8">
              <h3 className="mt-2 font-semibold text-text text-base">
                Web/UI Designer
              </h3>
              <h4 className="text-left mt-1 text-text dark:text-dark-text text-base font-normal">
                University of California, Riverside
              </h4>
              <h5 className="mt-1 italic text-base dark:text-dark-text">
                Aug. 2009 &ndash; Feb. 2012
              </h5>
              <p className="font-defaultSans my-2 text-base">
                I developed 12 individual websites serving over 1 million annual
                unique visitors. I trained users on updating website content via
                content management systems. I planned and executed the
                department’s first web application user research project. I
                worked cross-functionally with graphic designers and software
                engineers to execute on a digital communications strategy. I
                designed wireframes, user interfaces, and site maps.
              </p>
            </section>
            <h2>Teaching Experience</h2>
            <section className="my-8">
              <h3 className="mt-2 font-semibold text-text text-base">
                Adjunct Professor of Design
              </h3>
              <h4 className="text-left mt-1 text-text dark:text-dark-text text-base font-normal">
                University of Redlands
              </h4>
              <h5 className="mt-1 italic text-base dark:text-dark-text">
                Jan. 2022 &ndash; Present
              </h5>
              <p className="font-defaultSans my-2 text-base">
                I teach and design curriculum for an undergraduate web design
                course focused on topics such as user experience design, user
                interface design, visual hierarchy, information architecture,
                design careers, front-end development, and Figma.
              </p>
            </section>
            <section className="my-8">
              <h3 className="mt-2 font-semibold text-text text-base">
                Adjunct Professor of IT
              </h3>
              <h4 className="text-left mt-1 text-text dark:text-dark-text text-base font-normal">
                California Baptist University
              </h4>
              <h5 className="mt-1 italic text-base dark:text-dark-text">
                July 2015 &ndash; Present
              </h5>
              <p className="font-defaultSans my-2 text-base">
                I teach and design curriculum for multiple courses to
                undergraduate and graduate students on information technology
                topics such as business software, project management, systems
                analysis/design, web development, networking, and information
                systems.
              </p>
            </section>
          </div>
          <div>
            <aside className="w-full">
              <h3>Education</h3>
              <p className="mt-4 font-defaultSans font-semibold text-text text-sm">
                Southern New Hampshire University
              </p>
              <p className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                Master of Science in Information Technology
              </p>
              <p className="text-left italic text-text dark:text-dark-text text-sm font-normal">
                2015
              </p>
              <p className="mt-4 font-defaultSans font-semibold text-text text-sm">
                University of California, Riverside
              </p>
              <p className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                Bachelor of Arts in Political Science
              </p>
              <p className="text-left italic text-text dark:text-dark-text text-sm font-normal">
                2008
              </p>
            </aside>
            <aside className="mt-8">
              <h3>Skills</h3>
              <ul className="list-none">
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  UX design
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  UI design
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  User research
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  Prototyping
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  Design systems
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  Storytelling
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  Mentoring
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  Development (HTML, CSS, JS)
                </li>
              </ul>
            </aside>
            <aside className="mt-8">
              <h3>Tools</h3>
              <ul className="list-none">
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  Figma
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  FigJam
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  Sketch
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  Adobe Creative Cloud
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  Miro
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  Airtable
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  VS Code
                </li>
                <li className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                  GitHub
                </li>
              </ul>
            </aside>
            <aside className="mt-8">
              <h3>Volunteer Experience</h3>
              <p className="mt-4 font-defaultSans font-semibold text-text text-sm">
                Mentor
              </p>
              <p className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                ADPList
              </p>
              <p className="text-left italic text-text dark:text-dark-text text-sm font-normal">
                Sep. 2021 &ndash; Present
              </p>
              <p className="mt-4 font-defaultSans font-semibold text-text text-sm">
                Director (Board of Directors)
              </p>
              <p className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                Higher Education Web Professionals Association
              </p>
              <p className="text-left italic text-text dark:text-dark-text text-sm font-normal">
                June 2017 &ndash; Feb. 2022
              </p>
            </aside>
            <aside className="mt-8">
              <h3>Awards</h3>
              <p className="mt-4 font-defaultSans font-semibold text-text text-sm">
                Top 1% Mentor (Individual Award)
              </p>
              <p className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                Awarded to top performing mentors by ADPList
              </p>
              <p className="text-left italic text-text dark:text-dark-text text-sm font-normal">
                Apr. 2022
              </p>
              <p className="mt-4 font-defaultSans font-semibold text-text text-sm">
                Top 1% Mentor (Individual Award)
              </p>
              <p className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                Awarded to top performing mentors by ADPList
              </p>
              <p className="text-left italic text-text dark:text-dark-text text-sm font-normal">
                March 2022
              </p>
              <p className="mt-4 font-defaultSans font-semibold text-text text-sm">
                Outstanding Student (Individual Award)
              </p>
              <p className="text-left font-defaultSans text-text dark:text-dark-text text-sm font-normal">
                Awarded for earning a 4.0 GPA throughout the MSIT graduate
                program by Southern New Hampshire University
              </p>
              <p className="text-left italic text-text dark:text-dark-text text-sm font-normal">
                March 2015
              </p>
            </aside>
          </div>
        </div>
      </div>
    </Layout>
  );
}
