import React, { useState } from 'react'
import { Searchbar } from '~/layout/components/Search/'
import { SearchFeedbar } from '~/layout/components/Filter'
import SearchResult from '~/pages/Search/SearchResult'
import { useSearchParams } from 'react-router-dom'
import { useEffect } from 'react'
import fakeData from '~/FakeData'

function Search() {
  const [searchParams, setSearchParams] = useSearchParams()
  // const [result, setResult] = useState([])
  const [loading, setLoading] = useState(false)
  let q = searchParams.get("q")
  let type = searchParams.get("type")

  // useEffect(() => {
  //   setLoading(true)
  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 1000)

  // }, [type])

  return (
    <div>
      <Searchbar />
      <div className="my-5 bg-white">
        <SearchFeedbar q={q} type={type} />
      </div>
      <div>
        {/* <SearchResult result={fakeData.Authors.users} loading={loading} type={"user"} /> */}
        <SearchResult result={fakeData.Posts.posts} loading={loading} type={"posts"} />
      </div>
    </div>
  )
}

export default Search
