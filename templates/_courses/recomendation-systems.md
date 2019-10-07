---

title:
  Recommendation Systems

brief:
  An introduction to the art & science of building recommendation systems using machine learning & deep learning. 
  
description: |

  In the digital world, recommendation systems play a significant role - both for the users and for the company. For the users, a new world of options are thrown up - that were hitherto tough to find. For companies, it helps drive up user engagement and satisfaction, directly impacting their bottom line. If you’ve shopped on an e-commerce site or watched a movie on an on-demand video platform you would’ve seen options like: “People who viewed this product also viewed…” “Products similar to this one…”. These are the results from recommendation systems.

  In this workshop, you will learn the different paradigms of recommendation systems and get introduced to the usage of machine-learning and deep-learning based approaches. By the end of the workshop, you will have enough practical hands-on knowledge to build, select, deploy and maintain a recommendation system for your problem.

objectives: |
  The aim of the workshop is to provide a thorough introduction to the art and science of building recommendation systems. These are the main objectives:

    - Get a thorough introduction to recommendation systems and paradigms across domains
    - Gain an end-to-end view of machine-learning & deep-learning based recommendation and learning-to-rank systems
    - Understand practical considerations and guidelines for building and deploying recommendation systems for your own problems

audience: |
  A programmer interested in adding data-driven recommendations to their products or a beginner in data scientist with experience in using machine learning & interested to build a deeper and more applied perspective in using ML & DL for recommndation systems.

prerequisites: |
  This is a hands-on course and hence, participants should be comfortable with programming in python and have exposure to python data stack.

    - Participants should have a basic familiarity of Python. Specifically, we expect participants to know the first four sections from the [Python Practice Book](https://anandology.com/python-practice-book)
    - Prior knowledge of machine learning principles is needed. Participants should have practice with machine learning problems e.g. regression, classification. Specifically, participants should be able to work with the following python libraries. You can refer to the Python Data Science Handbook to learn the same.
        - jupyter: For doing literate programming in notebooks
        - numpy: For scientific computation
        - pandas: For data wrangling and transformation of tabular data (dataframes)
        - scikit-learn: For building machine learning models
    - While the deep learning concepts will be taught in an intuitive way, some prior knowledge of linear algebra and calculus would be helpful. You can refer to these visual explanation videos from @3Blue1Brown on Linear Algebra, Calculus and Deep Learning to get started.

outline: |

  ### Session #1: Introduction

  * Why build recommendation systems?
    * Scope and evolution of recsys
    * Prediction and Ranking
    * Relevance, novelty, serendipity & diversity
  * Paradigms in recommendations:
    * Content-based
    * Collaborative filtering
    * Knowledge-based
    * Hybrid and Ensembles
  * Key concepts in recsys:
    * Explicit vs. implicit feedback
    * User-Item matrix
    * Domain signals: location, time, context, social
  * Why use deep learning for recsys?
    * Primer on deep learning
    * Traditional vs deep learning approaches
    * Examples and use-cases

  ### Session #2: Content-Based

  * Introduction to the case #1: product recommendation
  * Environment setup for hands-on session
  * Feature extraction using deep learning: Embeddings for Hetrogenous data
  * Exercise: Recommending items using similarity measures

  ### Session #3: Colloborative-Filtering

  * Overview of traditional Colloborative-Filtering for recsys
  * Primer on deep learning approaches
    * Deep matrix factorisation
    * Auto-Encoders
  * Exercise: Recommending items using Colloborative-Filtering

  ### Session #4: Learning-to-Rank

  - Why learning-to-rank? Prediction vs Ranking
  - Rank-learning approaches: pointwise, pairwise and listwise
  - Deep learning approach to combine prediction and ranking
  - Exercise: Recommending items using Learning-to-Rank

  ### Session #5: Hybrid Recommender

  * Introduction to the case #2: text recommendation
  * Combining content-based and collaborative filtering
  * Primer on Wide & Deep Learning for Recommender Systems
  * Exercise: Recommending items using Hybrid recommender

  ### Session #6: Time and Context

  * Adding temporal component: window and decay-based
  * Adding context context through group recommendations
  * Dynamic and Sequential modelling using Recurrent Neural Networks
  * Exercise: Recommending items using RNN recommender

  ### Session #7: Deployment & Monitoring

  * Deploying the recommendation system models
  * Measuring improvements from recommendation system
  * Improving the models based on the feedback from production
  * Architecture design for recsys: Offline, Nearline and Online

  ### Session #8: Evaluation, Challenges & Way Forward

  * A/B testing for recommendation systems
  * Challenges in recsys:
    * Building explanations
    * Model debugging
    * Scaling-out & up
    * Fairness, accountability and trust
  * Bias in recsys: training data, UI → Algorithm → UI, private
  * When not to use deep learning for recsys
  * Recap and next steps, Learning Resources

duration: 2 days
participants: 30 or less

format: |
  This would be a two-day instructor-led hands-on workshop to learn and implement an end-to-end deep learning model for recommendation systems. This is predominantly a hands-on course and will be 70% programming/coding and 30% theory. It would aim to cover the following topics.

infrastructure: |
  We will be using Python 3 data stack for the workshop.

  A jupyterlab instance running in the cloud with all the required software will be shared with each of the participants during training. No need to install any special software.

trainers:
  - /trainers/amit
  - /trainers/bargava

testimonials:
  - /testimonials/ml-vishal-vmware

active: true

order: 20
---
