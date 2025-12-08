import React from 'react'
import AgentCard from '../AgentCard';
import agents from '../../assets/data/agents.json'
const Agents = () => (
  <div className="mt-16 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 justify-self-center p-4">
      {agents.map((agent) => (
        <AgentCard
          key={agent.id}
          name={agent.name}
          role={agent.role}
          phone={agent.phone}
          image={agent.image}
        />
      ))}
    </div>
);
export default Agents;
