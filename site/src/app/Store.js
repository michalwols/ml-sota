import papers from '../../../data/papers.json'
import challenges from '../../../data/challenges.json'

import moment from 'moment'
import Fuse from 'fuse.js'

import { observable, computed, action } from 'mobx'

export class Store {
  @observable
  papers = papers.map(p => {
    p.publication_date = p.publication_date.length > 0
      ? moment(p.publication_date)
      : null
    return p
  }).sort((p1, p2) => p2.publication_date.valueOf() - p1.publication_date.valueOf())
  @observable challenges = challenges
  @observable searchQuery = null

  @computed
  get papersIndex() {
    return new Fuse(this.papers, {
      shouldSort: true,
      tokenize: true,
      keys: ['title', 'tags', 'results.dataset', 'tldr']
    })
  }

  @computed
  get challengesIndex() {
    return new Fuse(this.challenges, {
      keys: [
        {
          name: 'name',
          weight: 0.8
        },
        {
          name: 'tldr',
          weight: 0.4
        },
        {
          name: 'tags',
          weight: 0.5
        }
      ]
    })
  }

  @computed
  get papersByChallenge() {}

  @computed
  get papersByTag() {
    const papersByTag = new Map()

    for (let p of this.papers) {
      for (let t of p.tags) {
        const papers = papersByTag.get(t) || []
        papers.push(p)
      }
    }

    return papersByTag
  }

  @computed
  get papersByAuthor() {}

  @computed
  get challengesByTag() {}

  @computed
  get resultsByChallenge() {}

  @computed
  get challengeSearchResults() {
    if (this.searchQuery) {
      return this.challengesIndex.search(this.searchQuery)
    }
    return this.challenges
  }

  @computed
  get paperSearchResults() {
    if (this.searchQuery) {
      return this.papersIndex.search(this.searchQuery)
    }
    return this.papers
  }

  @action.bound
  updateSearchQuery(v) {
    console.log(v)
    this.searchQuery = v
  }
}

const s = new Store()
export default s
