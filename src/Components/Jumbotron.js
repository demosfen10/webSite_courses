import React from 'react';
import {Jumbotron as Jumbo, Container} from 'react-bootstrap';
import fon from '../img/fon.png';
import styled from 'styled-components';

const Styles = styled.div`
.jumbo{
    background:url(${fon}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    position: relative;
       z-index: -2;
}
.overlay{
    background-color:#000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom:0;
    right:0;
    z-index:-1;
}
`;

const Jumbotron =() =>(
    <Styles>
<Jumbo fluid className="jumbo">
<div className="overlay"></div>
<Container>
<h1>Если вкрации...</h1>
<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam tempus venenatis metus a porttitor. Duis risus est, tincidunt at dui at, sodales varius neque. Integer id sapien nec nisl posuere semper in in felis. Fusce ac erat sed elit dictum tincidunt. Morbi mollis nisl et volutpat viverra. Donec aliquet libero ut rutrum dictum. Quisque vitae sagittis erat. Nunc pharetra fermentum rutrum. Donec cursus ullamcorper dignissim. Integer imperdiet, justo eu ultrices pulvinar, augue orci placerat lacus, a sagittis elit tortor sit amet arcu.

Nullam consequat fermentum dolor, sit amet imperdiet ligula bibendum vel. Sed vulputate feugiat nisi. Phasellus sed turpis scelerisque, pretium justo sed, lacinia magna. Etiam ac dictum tortor. Cras rhoncus dignissim lacus, a tempus nisl sodales a. Vivamus nec mi metus. Maecenas id posuere mauris, ut consequat massa.

Phasellus in quam at nibh sagittis auctor. Integer sodales ullamcorper rutrum. Quisque laoreet, mauris nec tempus sodales, erat dolor imperdiet nulla, ut egestas dolor massa eu mauris. Donec aliquam ligula quis risus sollicitudin, vel vehicula risus dictum. Curabitur et erat quis tortor scelerisque vulputate sit amet id nulla. Nulla molestie consequat massa, eget malesuada felis venenatis vitae. In eu ipsum nunc. Donec ut rutrum erat. Vivamus gravida ex augue, ut aliquet ligula egestas nec. Nullam augue nulla, imperdiet in ligula non, sodales ullamcorper ligula. Mauris mi velit, fringilla ac cursus sed, suscipit in quam. Sed gravida ultricies turpis, eget faucibus nisi posuere ac.

</p>
</Container>
</Jumbo>
</Styles>
)

export default Jumbotron;