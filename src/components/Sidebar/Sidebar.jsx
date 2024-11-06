import React from 'react'

function Sidebar({ collapsed, onSidebarClick, allQs, sendQue }) {

    // console.log(allQs.map((q) => q.question));
    return (
        <>
            <div className={collapsed ? "collapsed sidebar" : "sidebar"}>
                <div className="sidebar-header">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png" alt="" style={{ width: "20px" }} onClick={onSidebarClick} />
                </div>

                {/* <hr  /> */}
                <div className="options">

                    <div className="sidebar-menu top">
                        <ul>

                            {collapsed ? "" :
                                <li style={{ padding: "10px", fontWeight: "700" }}>
                                    <a href="#">

                                        <span>Recent</span>
                                    </a>
                                </li>
                            }
                        </ul>

                        <ul>
                            {
                                collapsed ? "" : allQs ? allQs.slice(Math.max(allQs.length - 7, 0)).map((q) => <li key= {q.id} style={{
                                    height: "fit - content", 
                                    padding : "10px",
                                    overflow: "hidden",
                                    textOverflow: "ellipsis",
                                    fontSize: "15px",
                                    whiteSpace: "nowrap"}} onClick={() => sendQue(q.question)}><strong>{q.id}. </strong>{q.question}</li> ) : ""
                            }


                    </ul>
                </div>

                <div className="sidebar-menu bottom">
                    <ul>
                        <li>
                            <a href="#">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAElklEQVR4nO1aQYscRRQuwURxL7oaBY1OkN7t+r7q7gX7B+zJmyJqFC+aq5hFD3owKphLNB6ERNeLYA6KISHoJUGiXhUSRTwkBCRIkLgqrNFbTDS7E55bkdhU93R1V08mS39Ql57pV9/X71XVq3qlVI8ePXr0WEMcx3eT3AbgbZJfADhNcpnkBQB/A/jDPpPfFuW/xph71fWELMvuJLkDwPckV0kOfRuAUwBeBTAYC+k4jrf4vkMyIvkRgItNRJa0FZIHkiTJulFqQfJMXdFzc3O3knxPQjSg0GJbBbAviqJNqgtwrZORorXWDwI426HQYqifI7m1K8HDCtE3ANhZY4zK798BeBPAk1rrZHZ29o4oim7K83xDmqa3ATDGmMcBvEHymA3jUcIX5f0uBA+LokluBLB/BKklkq/PzMzc49t3mqabZdIj+fOIPj7LsmyqC8HDK6Ln5+dvJPnpiJB7UTzYloPY0Fo/Z22W9fd1ENF0d3AGwCcVnR9OkuQuFRgyBEgerPJ06/Cm59IB4CUZ18FUujltB/BPycd+t63xYc1Z86JMOHXt2omuaGNn3feNMQ+TPF/Cp/nszZqe1Vo/5WO3rWCBMeYhl6dlrDdep1nPu7/5ZmQhBFt+CyW8PvC19S88xm/tjCykYGvrkIPPahzHaaeTFoCf0jS9f9yCtda3k/zdYW9/p4Lp4emQgitC+xLJ+7oWPKzj6dCCJTkpych2eBkCsLthe3acgq3NVxyCT6pJADoQLPm6DeP/2ZWcXK1Hwdbu8aJdrfUzYVhPpuDdjrDeG4b1BAqWtNJh96har4Il2XDYPa3Wq2C7hSyG9LKaUMG/GmPQxq5dj4uCL/gQcx21bmxDqkxwCNGtBdORo5KcbkqocHZddlYlz6NrEtIAfnR4wagA6EJ060mL5JdFA8aYx3yJVBDcIhuOUOFN8olWyxLWCltFMrtUQIQUTfKtVokHyW0OA8eaimsa3rLnrWMHwLeOj/Z0bSJSsnQQWOmilFnmaUkX67wve19XtcJ78wDgVOt9ZkNP+yQjUlZ18DzhTQLAa46vfjZEVaHK03U9e9X6u+QQ/LI3AQAD1z5Tyh+qI/iu9QCed4i91HjokTwQ9Pw38E0DuTLh4PdxY6NJkmQlJdGD6hqjpM610jpBArCvZNnYHoy9P6cXStbv91sbj6Jok6tkKeUOqfWoMQPAI665RXLnuut2oxMF286PU7QV+5eDx6rW+tHQnS2WhJEUthaCdlYexi7PStsTvMM8zzdI8bmkQxF+SGbO0P1Kkb2qEE/yiNxMUF0gy7IpuWZQIVqWiYUQyclgMLhZ1lkAf1b091We57eoLpFl2VSVp21bkopAkwRAcmObLv4yoo8jnYu9OrzlmsEIQlfWxeNybUkmPrtRn5bjItum7Vq/1ZZqvqlxbUnygj2dhXEVLNHSWzYdtOXgs7EvrMf21rlQ1qKJVz+chJT2P0hKJ6TKbto0bDIkDmutH1CTCq5NOlLCPNlC6AnZe193d6fTNN0sVTwA7wD4nOQPMubl3Nu2c/bZURkWcizT5Lpijx49eqj1isvFjGZXJBwR5QAAAABJRU5ErkJggg==" alt="" style={{ width: "20px" }} />
                                {collapsed ? "" : <span>Activity</span>}
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAELklEQVR4nO1aTUgVURT+XvGCUF8UVNoPpbkoWhRtWmilUrtSMvvBskWaoC1cRbQxyTIoXLQsaGOPFi2iP9sE0SIQQttVWhBYoEYm5VMpSI0D58UwnTsz986855uaDy483px7fmbuPefccy4QIUKECBH+IAbgK4B5j2OC54QWJRrGpkcxQoxDBgbXIsS4ZGBwJ0KMJwYG9yLEGBUM2mZ5vl14PoYQYjmAdsGYHwDiFro4/2ena2ceC4oYgGYXL7oCwDUAk4rl2i/M6VfQTjIv4ukUBZozFcqOWZR5DaDDZvw+AJ9c9ucNge9Nlzm0xA9Y6NcCaAPwAsAc0xwN2tilAIYFZWYBPAdw2yLcabQIvFs8zCPeSZY1KzwfZh0DQ4eBt02PXwCeAjhs279pLAawF8BdAD99yLkQlLHrAEwZKJACcB3Aeg1Zq/nlfjOQNwNgQxAG3zEQ/hhAoQ+ZhcxDVy7p6gtlir35DMCg8D8tyVYEgxjzkpb5IOsg7fVyU4GLALwUmH4GsIxptvISfA9gHEAlgkcZe+qPvEXSBhUAGBH0e8W6a+OUYtk0Kr5GwoEXOas69rRv2Sek+HeSDxmSQ4PFOCnWNmro6IiEIi0kRVdCDzUA3nnYf0RTrcmbdJkWeI25fIC/cNJBsSEAm+AOWlZXNJ0O7cEuj0uylHVR8WqAJtoUQX6eqxi7XObrGmsdl11472Rfonpp5FeMcNwhGZhxWII1HjMvpy9tTSetqGbZ0jw6iNTDJyq41iQJ6Bbo4w579h6APQDyeBDv+w5bR3Jk3Qr6CeYdCLYoQkCTQFunUOisA/9zijnkve1oEuhGWMdA0ScIkoJ8UvFl3fBQmNcj0JULdKRb4PggCKLzqB1SBuZlqVUK8yhOe6mEkm6BY1oQRPvQjpRAl++Bf4GiCGBHnkBHugWOKY8GTxoanBDmfRfo8gU6esk5taQrPPCvyrUl3efDaVHoccOjXHJamwMISxR6VDiv0YXIeFja7dAQ0008HrA3zudRpfiyC5Z41Cvqxm6pZXUAqeX+bKeWbQ6Hh3EPlYUuHwZTTyqrh4cGB2WG+GjmhkVstM6XnmNjvRTWS13O2Sd0DE7wIVoK8LoFgGqXc6v1RaqWsQqrFAnRqG4BQLd8EuNMSYU4HwQozLzhRCHFv3vYGzuVeBKKr35aoSOVp7ShU8SjpfUly0U8VRlqwLSIB2ZuUqYNorlFPM4YlGnpBS1IIb7Ih8wiboxnvRDvp9UyFdZWC7hRNZ/jzTRqometXZr00S5t9TBvjluyWWuXgpvOfhvi1Py245bLnFFbfF4jNMSPIINXHkoCvvIwoKAlHldd7noUZ/LKQyYutSxR7NucuNRiAikxoKtKaez4V64tpdFrGMNDi04Dgy8ixKg1MPggQoxiA4M3IsSI/W8XxCNEiBABQeI3wYAfFtx9PqUAAAAASUVORK5CYII=" alt="" style={{ width: "20px" }} />
                                {collapsed ? "" : <span>Setting</span>}
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEpElEQVR4nO2bXYhVVRTHfzOjBX7OTKYY0sPMKDp9qFM0On7M9JBP44NE2EMm9KHvPRS3FJQynRDFt0QR8YsK6UE0LAettLF5Vl/qJb/KLCiECpsJY8W6cNmsc+7Z++5z7zXuHxZczpz9X2udvc86a629BxpooIFAtAGLgWeBQRX5vUj/dl+jGVgGbAaGgdvAvTIi95wBNgF9ylH36AK2A9czOFhOrgHvK2fd4XHgGDAewVFXhPMo0E0dYDKwAxjLwVFXRMceYFqtnB0AbmYw8ht9KC8BzwAdwMMq8rtX/yb3jGR4eDeAldV0tEmDUdryvQC8CkwP4G8FXtcHlfYgC2pLrpgAHEgx5HONsLGwXCN3kr59QAs5OvtpSkRdk5di4Hldypbu43k43QTsT1B4AniI/CE6TibYcCj28t6coGioGu9RCUTXzgRb5J2OFo3HDQVvUTu8nRDIKo7e0xI+PTKztYY105LhTa2EdE/CO1vJMp4IzFGR36EQG04Z9u2qJF0cN6JxewDXA8BG4CuHU35/CWwIdH6GsQJlaS8I4OKY8fRCPj1PA99nSB2/A3oC+F8wuI74knQZsytJhS9WAX9mzJVF/gCeC9AzbMxypw/BDsMY3wxqHvC7h7NF+Q2Y66lrhcGzLevgZqOeldzYF1aS8AuwRWdeZCvwa0Jg9MWIw3E1axNhmWHAawEBz+W4DMw27n0EuGLc/5inzg0GR2+WgZucQX8HVD0uxz/6EJLwpN5TOkaSCx+0GaVlISQAyFLxxccOh5R6vkvyowC93zocX2QZ9LMzSHpUvngD2Fsir2QYc8TRey5A75DD8VO5Ae3GeyDdiGrg6wiB62XD/ta0AT3GAGnL5I1u47svHUtfLDHsX1SuMnIHSN8pT3RoluXqXRrA1WXw9KcNGDQGzCQfSLJwELhr6DwfyDnL4BqstcPSKjpcJr18oloODxgDvHLSDNia4uxfwOoKuL2XdE9otuIxu3cSnL0UIUAu9Q1abcaAdcTDPIP/My07Y3Qe1xv8030TD6mcYsFaQSE1cBI+8E08YqWWtXJ4NKSGf8coHlKzFQ886qSce/VaDLSHFg99xizIXk+9Y2NoltiszTrfaicLJgFPOSLXYuCiY/MPPt3V7cbTko2ten2H+w3ed30IOo1kXnbx6tXhsw7nWEgNcNQwTnbx6s3hFxM217zRbUS9G9r8rheH5RTBj8ZXZX4o4W7DwFMVbLU8qEutVORaCCS4njbskz2nijbTrscmjQRrMuTrMqVS4pUJB018u4ox4XZFi4EqxpfkPxQMBcWZruaGeHPCzIq8GVNRkx4gsRQNa+GdN2ZoZWXZIClqdLToARJL4U3dxcsLa41oXJRP8jzJ05Iy08XZll5VLPQbSUWpfJins6XLu1DmxNyI7vWEHAtu00LAzY3dABX1nc0avcudmh3T7Y8hbZL36bd3pkqHXluvxftohgOq12JG45DDpVsSWq3/u8OlpVige0N5nKod09w4OF3ME5268341gqNSz75XhZ2PaAlCrwY36SvdyuDgLb23oJ2KaiY0uaBVe8QDJf/kIZ+dhYHHjBtooAH4F8+LPcYEceJrAAAAAElFTkSuQmCC" alt="" style={{ width: "20px" }} />
                                {collapsed ? "" : <span>Help</span>}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>


        </div >
        </>
    )
}

export default Sidebar