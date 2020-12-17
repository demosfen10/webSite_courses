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
            <td><a href="http://vk.com/demosfen10">@demosfen10</a></td>
            </tr>
            <tr>
            <td>2</td>
            <td>Dasha</td>
            <td>Krasnouvskaya</td>
            <td>@apathy</td>
            </tr>
            <tr>
            <td>3</td>
            <td>Kirill</td>
            <td>Golovin</td>
            <td>@krinch</td>
            </tr>
            <tr>
            <td>4</td>
            <td>Pavel</td>
            <td>Podolniy</td>
            <td>@podolniy</td>
            </tr>
            <tr>
            <td>5</td>
            <td>Dasha</td>
            <td>Krasnouvskaya</td>
            <td>@apathy</td>
            </tr>
            <tr>
            <td>6</td>
            <td colSpan="2">Larry the bird</td>
            <td>@twitTer</td>
            </tr>
            <tr>
            <td>7</td>
            <td>Ilya</td>
            <td>Eliseev</td>
            <td>@demosfen</td>
            </tr>
            <tr>
            <td>8</td>
            <td>Dasha</td>
            <td>Krasnouvskaya</td>
            <td>@apathy</td>
            </tr>
            <tr>
            <td>9</td>
            <td>Pavel</td>
            <td>Podolniy</td>
            <td>@podolniy</td>
            </tr>
        </tbody>
    </Table>
    </Container>
)