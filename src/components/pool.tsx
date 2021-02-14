import { useAsync } from 'react-async'

const Pool = () => {
  const { data, error, isLoading } = useAsync({ promiseFn: getPoolData })

  return (
    <section>
      <div>
        <h2 className="mb-8 text-4xl md:text-5xl font-bold tracking-tighter leading-tight">
          Pool Info
        </h2>
        { isLoading ? (
          <span>Loading...</span>
        ) : (
          <>
          <div>
            {/* <h4 className="text-2xl">Pool ID</h4>
            <small>{data?.response.data.pool_id}</small> */}
            <div>
              <p>
                <span className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
                  {data?.response.data.ticker_orig}
                </span> Ticker
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 md:col-gap-8 lg:col-gap-16">
              <div>
                <p>
                  <span className="mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
                    {data?.response.data.roa_lifetime}%
                  </span> ROA <small>(Return of ADA)</small>
                </p>
              </div>
              <div>
                <p>
                  <span className="mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
                  {data?.response.data.delegators}
                  </span> Delegators
                </p>
              </div>
              <div>
                <p>
                  <span className="mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
                  {(data?.response.data.active_stake/1000000000000).toFixed(2)}M
                  </span> Active Stake
                </p>
              </div>
              <div>
                <p>
                  <span className="mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
                  {(data?.response.data.total_stake/1000000000000).toFixed(2)}M
                  </span> Live Stake
                </p>
              </div>
              <div>
                <p>
                  <span className="mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
                  {(data?.response.data.pledge/1000000000).toFixed(1)}k
                  </span> Pledge
                </p>
              </div>
              <div>
                <p>
                  <span className="mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
                  {data?.response.data.blocks_epoch}
                  </span> Blocks in Epoch
                </p>
              </div>
              <div>
                <p>
                  <span className="mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
                  {parseInt(data?.response.data.blocks_epoch) + parseInt(data?.response.data.blocks_lifetime)}
                  </span> Blocks Lifetime
                </p>
              </div>
              <div>
                <p>
                  <span className="mb-8 text-2xl md:text-5xl font-bold tracking-tighter leading-tight">
                  {(data?.response.data.tax_ratio*100).toFixed(0)}% + {data?.response.data.tax_fix/1000000}
                  </span> Costs
                </p>
              </div>

            </div>
          </div>
          <br/>
          </>
        )}
      </div>
    </section>
  )
}

export default Pool


export async function getPoolData() {
  const url = "https://js.adapools.org/pools/dfacb4313176b700e8ce0ba88732a5d7583746ccfaf582bd12095fde/summary.json"
  const response = await fetch(url)
    .then(res => (res.ok ? res : Promise.reject(res)))
    .then(res => res.json())

  console.log(response)

  return {
    response
  }
}

// var a = [
//   (data.data.active_stake/1000000000000).toFixed(2)+'M',
//   data.data.blocks_epoch,
//   (data.data.total_stake/1000000000000).toFixed(2)+'M',
//   (parseInt(data.data.blocks_epoch)+parseInt(data.data.blocks_lifetime)),
//   (data.data.pledge/1000000000).toFixed(1)+'k',
//   (data.data.tax_ratio*100).toFixed(2)+'% + ' + (data.data.tax_fix/1000000)
// ];