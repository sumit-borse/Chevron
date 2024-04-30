import { RECORDS_PER_PAGE } from './constants'
import '@servicenow/now-button'

export default (state, { updateState, dispatch }) => {
    let { allRecords, currentPage, recordsForCurrentPage, totalPageCount, prevDisabled, nextDisabled } = state;
    console.log(currentPage)
    return (
        <div>
            <div className=" tableDiv">
                {/* <div className="tableDiv"> */}

                <div className="table-container">
                    <div className="search-bar">
                        <input type="text" className="filterText" />
                        <now-button className="search" label="Search" variant="primary" on-click={() => dispatch("NOW_BUTTON#SEARCH")}></now-button>
                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>A</th>
                                <th>B</th>
                                <th>C</th>
                                <th>D</th>
                            </tr>
                        </thead>

                        {
                            recordsForCurrentPage.length ? (
                                <tbody>
                                    {recordsForCurrentPage.map((ele, index) =>
                                        <tr>
                                            <td>{ele.a}</td>
                                            <td>{ele.b}</td>
                                            <td>{ele.c}</td>
                                            <td>{ele.d}</td>
                                        </tr>
                                    )}
                                </tbody>
                            ) : (
                                <tbody>
                                    <tr>
                                        <td colspan="4" className="emptyRow">Records not found.</td>
                                    </tr>
                                </tbody>
                            )

                        }

                    </table>
                </div>
                <div className="pagination-bar">
                    <now-button className="paginationElement" label="<" disabled={prevDisabled} variant="primary" on-click={() => dispatch("NOW_BUTTON#PREV")}></now-button>
                    <span className="paginationElement">Page: {currentPage} of {totalPageCount}</span>
                    <now-button className="paginationElement" label=">" disabled={nextDisabled} variant="primary" on-click={() => dispatch("NOW_BUTTON#NEXT")}></now-button>
                </div>
            </div>
        </div>
    );
};