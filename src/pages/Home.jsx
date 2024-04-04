import React, { useState } from 'react'
import Header from './Header'
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Home = () => {

    const teams = [
        {
            name: 'Team A vs Team B',        
        },
        {
            name: 'Team A vs Team C',
        },
        {
            name: 'Team A vs Team D',
        },
        {
            name: 'Team A vs Team E',
        },
        {
            name: 'Team A vs Team F',
        },
        {
            name: 'Team A vs Team G',
        },
        {
            name: 'Team A vs Team H',
        }
    ]
    const [selectedTeams, setSelectedTeams] = useState([]);
    const handleSelection = (teamIndex, selection) => {
        const updatedTeams = selectedTeams.filter(team => team.index !== teamIndex);
        setSelectedTeams([...updatedTeams, { index: teamIndex, name: teams[teamIndex].name, selection }]);
    };
  return (
    <>
    <Header/>
    <div className="mt-[80px] mb-[70px] px-[50px] ">
        <div class="overflow-x-auto">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-[18px] font-[600] text-[black] uppercase tracking-wider">Game</th>
                        <th class="px-6 py-3 text-left text-[18px] font-[600] text-[black] uppercase tracking-wider">Home</th>
                        <th class="px-6 py-3 text-left text-[18px] font-[600] text-[black] uppercase tracking-wider">Draw</th>
                        <th class="px-6 py-3 text-left text-[18px] font-[600] text-[black] uppercase tracking-wider">Away</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    {teams.map((team, index) => (
                        <tr key={index} class="transition-all hover:bg-gray-100">
                            <td class="px-6 py-4 whitespace-nowrap">{team.name}</td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <button onClick={() => handleSelection(index, 'Home')} class="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">1</button>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <button onClick={() => handleSelection(index, 'Draw')}  className='text-[30px]' ><FontAwesomeIcon icon={faXmark} size='30px' /></button>
                            </td>
                            <td class="px-6 py-4 whitespace-nowrap">
                                <button onClick={() => handleSelection(index, 'Away')}  class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">2</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        <div className="flex justify-center flex-col mt-[80px] ">
            <div className="flex flex-row justify-center ">
                <p className='text-[25px] font-[500] nb-[30px] '>My Bets</p>
            </div>
            <table>
            <thead class="bg-gray-50">
                <tr>
                    <th class="px-6 py-3 text-left text-[18px] font-[600] text-[black] uppercase tracking-wider">Game</th>
                    <th class="px-6 py-3 text-left text-[18px] font-[600] text-[black] uppercase tracking-wider">Selection</th>
                </tr>
            </thead>
            <tbody>
                {selectedTeams.length === 0 ? (
                    <tr>
                        <td colSpan='2'>No bets</td>
                    </tr>
                ): selectedTeams.map((team) => (
                    <tr key={team.index}>
                        <td class="px-6 py-4 whitespace-nowrap">{team.name}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{team.selection}</td>
                    </tr>
                ))}
                {selectedTeams.length > 0 && (
                    <div className="flex justify-center">
                        <form className="bg-white flex flex-col gap-[10px] items-center shadow-md rounded px-8 pt-6 pb-8 mb-4">
                            <div className="mb-4 ">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="bet-amount">Bet Amount</label>
                            </div>
                            <div className="flex items-center flex-row gap-[30px] justify-between">
                                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="bet-amount" type="number" placeholder="Enter bet amount" />
                                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">Bet</button>
                            </div>
                        </form>
                    </div>
                    )}
            </tbody>
            </table>
        </div>
    </div>
    </>
   
  )
}

export default Home