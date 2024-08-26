import React from "react";
import { useTable } from "react-table";

import { Badge, Container } from "react-bootstrap";


import { liveStreamGet } from "../../thor/api/LiveStreamApi";
import { LiveStream } from "../../thor/model";
import mockData from "./mockData"; // Assume you have some mock data for the table


function LiveStreaming() {


  let liveStreams:LiveStream[] = liveStreamGet().body;
  
  const data = React.useMemo(() => mockData, []);
  const columns = React.useMemo(
    () => [
      {
        Header: "",
        accessor: "artwork",
        Cell: ({ value }) => (
          <img src={value} alt="Album Art" style={{ width: 50, height: 50 }} />
        ),
      },
      {
        Header: "Artist",
        accessor: "artist",
      },
      {
        Header: "Song",
        accessor: "song",
      },
      {
        Header: "Listeners",
        accessor: "listeners",
        Cell: ({ value }) => <Badge pill>{value}</Badge>,
      },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <Container fluid className="App p-3">
      <Container>

        {liveStreams[0] &&

        liveStreams.map((liveStream, id) => {  
            return (
              <b key={('k'+ id)}>
                { liveStream.track.name }
              </b>
            );      
          })
        }
        
      </Container>
    </Container>
  );
}

export default LiveStreaming;
