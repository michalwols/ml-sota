import React, { Component } from 'react'
import { observer } from 'mobx-react'

import store from '../app/Store'
import Tag from '../app/components/Tag'
import { Heading, Subtitle, Name } from '../app/components/Typography'
import Paper from '../app/components/Paper'
import MicroBarChart from 'react-micro-bar-chart'

@observer
class Datasets extends Component {
  render() {
    return (
      <div>
        <input
          style={{
            fontSize: 20,
            padding: 10,
            width: '100%',
            border: '2px solid #EEE',
            borderRadius: 10,
            outline: 'none'
          }}
          autoFocus
          type="text"
          value={store.searchQuery || ''}
          onChange={e => store.updateSearchQuery(e.target.value)}
        />
        {store.paperSearchResults.length > 0 &&
          <div style={{ paddingTop: 5, marginTop: 10 }}>
            {/*<h1>Papers</h1>*/}
            {/*<sub>sort by</sub>*/}
            {/*<sub>filter by: new, rect, sota, tags, dataset</sub>*/}
            {store.paperSearchResults.map(p => <Paper {...p} />)}
          </div>}

        {store.challengeSearchResults.length > 0 &&
          <div style={{ paddingTop: 5, marginTop: 10 }} key={name}>
            {/*<h1>Challenges</h1>*/}
            {/*<sub>sort by</sub>*/}
            {store.challengeSearchResults.map(({ name, tags, stats }) =>
              <div>
                <Heading>{name}</Heading>
                <p>{tags.map(t => <Tag name={t} />)}</p>
                <p>number of classes: {stats.numClasses}</p>

                <MicroBarChart
                  width={200}
                  height={80}
                  tooltip
                  tipOffset={[0, 20]}
                  tipTemplate={(
                    d,
                    i,
                    data
                  ) => `value of ${d} at index ${i}, with
    ${data.length} data points`}
                  hoverColor="rgb(161,130,214)"
                  fillColor="rgb(210,193,237)"
                />
              </div>
            )}
          </div>}
      </div>
    )
  }
}

export default Datasets
