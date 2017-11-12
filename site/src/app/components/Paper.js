import React from 'react'

import { Heading, Subtitle, Name } from './Typography'
import Tag from './Tag'
import { Row, Col } from './Layout'

const Paper = (
  { title, authors, results, publication_date, tags, tldr, links = [] } = {}
) =>
  <Row
    style={{
      padding: '10px 20px',
      borderRadius: 6,
      borderTop: '1px solid #F3F3F3',
      marginTop: 5,
      marginBottom: 10
    }}>
    <Col
      key={title}
      id={title}
      style={{
        flexGrow: 4
      }}>
      <Heading>{title}</Heading>

      <div
        style={{
          lineHeight: '1.2em',
          padding: 0,
          margin: '5px 0',
          fontSize: 10
        }}>
        <Name>{publication_date && publication_date.fromNow()}</Name>{' '}
        {authors.map(t => <Name>{t}</Name>)}{' '}
      </div>

      {tldr && <Subtitle>{tldr}</Subtitle>}
      {/*<p>badge for SOTA on challenge</p>*/}
      <Row>
        {tags.length > 0 && <div>{tags.map(t => <Tag name={t} />)}</div>}
        {links.length > 0 && links.map(l => <a href={l}>{l.slice(0, 10)}</a>)}
      </Row>
    </Col>
    <Row style={{ flexWrap: 'wrap' }} justify={'flex-end'} align={'flex-start'}>
      {results.map(r => <Result {...r} />)}
    </Row>
  </Row>

const Result = ({ dataset, result }) =>
  <Col align={'flex-end'} justify={'flex-start'} style={{ marginLeft: 4 }}>
    <Heading>{result.value}</Heading>
    <Subtitle style={{ textAlign: 'right', paddingBottom: 0 }}>{dataset.toUpperCase()}</Subtitle>
  </Col>

export default Paper
