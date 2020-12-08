import React from  'react';
import {Container, Tab, Table} from 'react-bootstrap'

export const Users =()=>(
    <Container>
    <Table striped bordered hover>
        <thead>
            <tr>
                <th>#</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Username</th>
                </tr>
        </thead>
        <tbody>
            <tr>
            <td>1</td>
            <td>Ilya</td>
            <td>Eliseev</td>
            <td>@demosfen</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Dasha</td>
            <td>Krasnouvskaya</td>
            <td>@apathy</td>
            </tr>
            <tr>
            <td>3</td>
            <td colSpan="2">Larry the bird</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <td>1</td>
            <td>Ilya</td>
            <td>Eliseev</td>
            <td>@demosfen</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Dasha</td>
            <td>Krasnouvskaya</td>
            <td>@apathy</td>
            </tr>
            <tr>
            <td>3</td>
            <td colSpan="2">Larry the bird</td>
            <td>@twitter</td>
            </tr>
            <tr>
            <td>1</td>
            <td>Ilya</td>
            <td>Eliseev</td>
            <td>@demosfen</td>
            </tr>
            <tr>
            <td>2</td>
            <td>Dasha</td>
            <td>Krasnouvskaya</td>
            <td>@apathy</td>
            </tr>
            <tr>
            <td>3</td>
            <td colSpan="2">Larry the bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
    </Table>
    </Container>
)