import './Tables.scss';
import React from 'react';
import {Table} from 'react-bootstrap';


function Tables(props) {
            if (props.showTab === 1) {
                return(
                <Table striped bordered hover className='surerTable'>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Question</th>
                    <th>Answer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>What is Surer?</td>
                    <td>  Surer is a cloud-based, web platform that helps all parties, 
                from insurers to agents to financial advisors, in the General Insurance industry automate processes and 
                drive network collaborations – to be able to pitch better and close faster.</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Who is Surer looking for?</td>
                    <td>  Surer is looking for a talented and self-driven Frontend Web Engineer who learns fast 
                and has the nous to think out-of-the-box - to make a big difference for the Insurance industry and 
                empower the parties within this ecosystem; which is Jaewon!</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>What makes Surer special?</td>
                    <td> Surer possess a first-in-market solution, such as Quote Sourcing System that allows you
                      to get a quote conveniently, or Agent Matching and Referal Interface that allows you go get in touch with
                      Surer 'Referral Circle' and share resources to get the best quote.
                    </td>
                  </tr>
                </tbody>
              </Table>
                )
            } else if (props.showTab === 2) {
                return (
              <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Why should you hire Jaewon, Surer?</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Stylish Coding: New React</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Stylish Coding: SASS</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Promise you the best passion ever!</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Quick Learner!</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Mr. Renfred Tay's interest in Korean culture!</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Experience in business major; good communication skills!</td>
                </tr>
              </tbody>
            </Table> )
            } else {
                return null;
            }
            }
export default Tables;