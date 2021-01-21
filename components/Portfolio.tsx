import React, { FunctionComponent } from "react";
import Image from "next/image";
import { PortfolioItem } from "../interfaces";

interface PortfolioProps {
  portfolioItems: PortfolioItem[];
}

const Portfolio: FunctionComponent<PortfolioProps> = ({ portfolioItems }) => {
  return (
    <section id="portfolio">
      <div className="row">
        <h1>
          <span> Projects </span>
        </h1>
        <div className="twelve columns collapsed">
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {portfolioItems.map((item) => {
              const { title, description, image, website } = item;
              return (
                <div key={title} className="columns portfolio-item">
                  <a
                    target="_blank"
                    href={website}
                    title={title}
                    rel="noopener noreferrer"
                  >
                    <div className="item-wrap">
                      <Image
                        alt={title}
                        src={`/images/portfolio/${image}`}
                        layout="fill"
                      />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{title}</h5>
                          <p>{description}</p>
                        </div>
                      </div>
                      <div className="link-icon">
                        <i className="fa fa-link" />
                      </div>
                    </div>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
