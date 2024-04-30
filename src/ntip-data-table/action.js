import { actionTypes } from "@servicenow/ui-core";
import _ from "lodash";
import { RECORDS_PER_PAGE } from "./constants";

export default {
    actionHandlers: {
        [actionTypes.COMPONENT_BOOTSTRAPPED]: (coeffects) => { },

        [actionTypes.COMPONENT_CONNECTED]: (coeffects) => {
            var records = [
                {
                    a: 'a',
                    b: 'b',
                    c: 'c',
                    d: 'd'
                },
                {
                    a: 'asf',
                    b: 'ASD',
                    c: 'gsgs',
                    d: 'sdg'
                },
                {
                    a: 'b',
                    b: 'xcvbs',
                    c: 'sgs',
                    d: 'sdgsrth'
                },
                {
                    a: 'srgthwr',
                    b: 'zvzfg',
                    c: 'sdfgs',
                    d: 'yhty'
                },
                {
                    a: 'fghd',
                    b: 'fhjg',
                    c: 'aasds',
                    d: 'b'
                },
                {
                    a: 'fjyfm',
                    b: 'zdfad',
                    c: 'fdgsdfz',
                    d: 'zfvzfdgb'
                },
                {
                    a: 'zdfgbsdzf',
                    b: 'zvzfd',
                    c: 'afcrf',
                    d: 'sghs'
                },
            ]
            let recordsForCurrentPage = [];
            let totalPageCount = Math.ceil(records.length / RECORDS_PER_PAGE);
            for (let i = 0; i < RECORDS_PER_PAGE; i++) {
                recordsForCurrentPage.push(records[i]);
            }
            coeffects.updateState({ allRecords: records, filteredRecords: records, currentPage: 1, recordsForCurrentPage: recordsForCurrentPage, totalPageCount: totalPageCount, prevDisabled: true, nextDisabled: false });
        },

        [actionTypes.COMPONENT_RENDERED]: (coeffects) => {
        },

        ["NOW_BUTTON#NEXT"]: (coeffects) => {
            let { currentPage, allRecords, recordsForCurrentPage, totalPageCount, prevDisabled, nextDisabled, filteredRecords } = coeffects.state;
            // if (nextDisabled)
            //     return;
            currentPage += 1;
            let startIndex = (currentPage - 1) * RECORDS_PER_PAGE;
            let endIndex = startIndex + RECORDS_PER_PAGE;
            recordsForCurrentPage = [];
            for (let i = startIndex; (i < endIndex && i < filteredRecords.length); i++) {
                recordsForCurrentPage.push(filteredRecords[i]);
            }

            if (currentPage == totalPageCount)
                nextDisabled = true;
            else
                nextDisabled = false;
            if (currentPage == 1)
                prevDisabled = true;
            else
                prevDisabled = false;

            console.log(currentPage, recordsForCurrentPage)
            coeffects.updateState({ currentPage: currentPage, allRecords: allRecords, recordsForCurrentPage: recordsForCurrentPage, prevDisabled: prevDisabled, nextDisabled: nextDisabled });
        },

        ["NOW_BUTTON#PREV"]: (coeffects) => {
            let { currentPage, allRecords, recordsForCurrentPage, totalPageCount, prevDisabled, nextDisabled, filteredRecords } = coeffects.state;
            // if (nextDisabled)
            //     return;
            currentPage -= 1;
            let startIndex = (currentPage - 1) * RECORDS_PER_PAGE;
            let endIndex = startIndex + RECORDS_PER_PAGE;
            recordsForCurrentPage = [];
            for (let i = startIndex; (i < endIndex && i < filteredRecords.length); i++) {
                recordsForCurrentPage.push(filteredRecords[i]);
            }

            if (currentPage == totalPageCount)
                nextDisabled = true;
            else
                nextDisabled = false;
            if (currentPage == 1)
                prevDisabled = true;
            else
                prevDisabled = false;

            console.log(currentPage, recordsForCurrentPage)
            coeffects.updateState({ currentPage: currentPage, allRecords: allRecords, recordsForCurrentPage: recordsForCurrentPage, prevDisabled: prevDisabled, nextDisabled: nextDisabled });
        },

        ["NOW_BUTTON#SEARCH"]: (coeffects) => {
            let { currentPage, allRecords, recordsForCurrentPage, prevDisabled, nextDisabled, totalPageCount } = coeffects.state;
            let filterText = "a";
            let filteredRecords = [];
            if (filterText == "")
                filteredRecords = allRecords;
            else {
                for (let i = 0; i < allRecords.length; i++) {
                    for (var key in allRecords[i]) {
                        if (allRecords[i][key].match(filterText) ) {
                            filteredRecords.push(allRecords[i]);
                            break;
                        }
                    }
                }
            }
            let startIndex = 0;
            let endIndex = startIndex + RECORDS_PER_PAGE;
            console.log("NOW_BUTTON#SEARCH", filteredRecords)
            recordsForCurrentPage = [];
            for (let i = startIndex; (i < endIndex && i < filteredRecords.length); i++) {
                recordsForCurrentPage.push(filteredRecords[i]);
            }
            console.log(recordsForCurrentPage);
            totalPageCount = Math.ceil(filteredRecords.length / RECORDS_PER_PAGE);
            console.log(recordsForCurrentPage, totalPageCount);
            currentPage = 1;
            if (currentPage == totalPageCount)
                nextDisabled = true;
            else
                nextDisabled = false;
            if (currentPage == 1)
                prevDisabled = true;
            else
                prevDisabled = false;
            // console.log(currentPage, recordsForCurrentPage)
            coeffects.updateState({ currentPage: currentPage, allRecords: allRecords, recordsForCurrentPage: recordsForCurrentPage, prevDisabled: prevDisabled, nextDisabled: nextDisabled, filteredRecords: filteredRecords, totalPageCount: totalPageCount });
        }

    }
}
