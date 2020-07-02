# Climate Strike Software

[![Build Status](https://img.shields.io/static/v1.svg?label=CSL&message=software%20against%20climate%20change&color=green?style=flat&logo=github)](https://img.shields.io/static/v1.svg?label=CSL&message=software%20against%20climate%20change&color=green?style=flat&logo=github
)

Climate Strike Software is software that uses the [Climate Strike License](licenses), a software license that developers can use to prohibit the use of their code by applications or companies that threaten to accelerate climate change through fossil fuel extraction.

## Table of Contents
1. [Why now?](#why-now)
1. [Top OSS projects that accelerate the climate crisis](#top-oss-projects-that-accelerate-the-climate-crisis)
1. [How to use the License](#how-to-use-the-license)
1. [Reading List](#reading-list)
1. [Is it an Open Source License](#is-it-an-open-source-license)

## Why now?
Despite the urgency of our planet's climate crisis, oil production is at an [all-time high](https://www.indexmundi.com/energy/?product=oil&graph=production). The use of new technology is one of the main reasons behind the growth. Reservoirs that were deemed too costly to harvest are now being harvested with new equipment, better industrial processes, and increasingly specialized software. At this rate, most oil and gas company's [projected oil](https://www.theguardian.com/environment/2019/oct/10/oil-firms-barrels-markets) production is only set to increase.

Most recently, Big Oil has begun to use cloud computing, the internet of things, and artificial intelligence (AI) to accelerate fossil fuel extraction. Specialists have also begun to call AI the next ["productivity revolution in the Oil & Gas industry"](https://www.oilandgasiq.com/strategy-management-and-information/news/is-ai-the-next-revolution-for-the-oil-and-gas-industry) and are increasingly depending [open source technologies](https://www.hartenergy.com/exclusives/impact-big-data-open-source-oil-and-gas-29465) to increase their efficiency. In their profit-maximizing short-sightedness, oil and gas companies are ramping up with new software to automate and optimize oil production.

By adopting the Climate Strike License, developers can explicitly prohibit the use of their software within some of the largest oil companies including Chevron, BP, Exxon Mobil, and many other companies that turn a blind eye to the greatest threat that humanity has faced.

This license reminds developers that we have the power to stop these multinational oil companies from taking advantage of open source software -- that instead of waiting idly by, that they can take an active position in preventing a climate catastrophe.

## Top OSS projects that accelerate the climate crisis

This is a list of the top 10 open source projects that knowingly or unknowingly contribute to the climate crisis. If each of these projects adopts the climate strike license, we may start to see a significant impact on the productivity of the fossil fuel industries.

To create this list, we parsed through GitHub for all the repos that are explicitly used for oil production and we looked through all of their dependencies. This list reflects the repos that are most commonly used when building software for oil production.

See our full [methodology](https://github.com/climate-strike/analysis) for creating this list.

| Rank | Project                                                | Uses the Climate Strike License | Date of adoption | Link to Issue   |
| --- | ---                                                    | ---                             | ---              | ---             |
| 1 | [numpy](https://github.com/numpy/numpy) | :x: | N/A | Not yet created |
| 2 | [matplotlib](https://github.com/matplotlib/matplotlib) | :x: | N/A | Not yet created |
| 3 | [scipy](https://github.com/scipy/scipy) | :x: | N/A | Not yet created |
| 4 | [pandas](https://github.com/pandas-dev/pandas) | :x: | N/A | Not yet created |
| 5 | [pytest](https://github.com/pytest-dev/pytest) | :x: | N/A | Not yet created |
| 6 | [sphinx](https://github.com/sphinx-doc/sphinx) | :x: | N/A | Not yet created |
| 7 | [jupyter](https://github.com/jupyter/jupyter) | :x: | N/A | Not yet created |
| 8 | [pytest-cov](https://github.com/pytest-dev/pytest-cov) | :x: | N/A | Not yet created |
| 9 | [nose](https://github.com/nose-devs/nose) | :x: | N/A | Not yet created |
| 10 | [requests](https://github.com/psf/requests) | :x: | N/A | Not yet created |

## How to use the License?
To use the license in your project, follow the steps below:

1. Add the license appropriate for your project ([MIT](licenses/MIT), [BSD](licenses/BSD), or [request another](https://github.com/climate-strike/license/issues)) to the root level of your project:

2. Update the `<year>` and `<copyright holders>` fields at the top of the license.

3. Attach the badge to your project by pasting the following snippet into your project's `README.md`:
    ```
    [![Build Status](https://img.shields.io/static/v1.svg?label=CSL&message=software%20against%20climate%20change&color=green?style=flat&logo=github)](https://img.shields.io/static/v1.svg?label=CSL&message=software%20against%20climate%20change&color=green?style=flat&logo=github)
    ```

4. Add your project to the [Greenlist](greenlist) by making a PR to this repo.

## Reading List
A short list of useful articles about software and climate change:

- [How Google, Microsoft, and Big Tech Are Automating the Climate Crisis](https://gizmodo.com/how-google-microsoft-and-big-tech-are-automating-the-1832790799)

  This article provides a good overview of how the three cloud computing giants (Microsoft, Google, Amazon) have become active collaborators of the oil and gas industry and how they are using AI to automate the climate crisis.

- [Amazon Employees Will Walk Out Over the Company's Climate Change Inaction](https://www.wired.com/story/amazon-walkout-climate-change/)

  Amazon workers walked out on September 20th, 2019 as part of the Global Climate Strike. They demanded the following of their company: (1) Zero emissions by 2030, (2) Zero custom Amazon Web Services (AWS) contracts for fossil fuel companies to accelerate oil and gas extraction, (3) Zero funding for climate-denying lobbyists and politicians.

- [Here are 10 ways AI could help fight climate change](https://www.technologyreview.com/s/613838/ai-climate-change-machine-learning/)

  Instead of using AI to accelerate the climate crisis, AI can also be used to fight against it. This article gives us some ideas for how open source technologies and AI can make a positive impact instead of a negative one.

## Is it an Open Source License?

While the Climate Strike License violates the Open Source Initiative's canonical Open Source Definition, which explicitly excludes licenses that limit re-use "in a specific field of endeavor", we feel that as tech workers, we should take responsibility in how our software is used, and that the urgency of climate change cannot be limited by the ideological position of open source software. Instead, we want adopters of the Climate Strike License to take a bold stance in the fight to save the planet.
