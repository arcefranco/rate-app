import React from "react";
import {FlatList } from "react-native";
import RepositoryItem from "./RepositoryItem";
import repositories from "../data/repositories";

const RepositoryList = () => {
    return (
        <FlatList 
        data={repositories}
        renderItem={({item:repo}) => (
          <RepositoryItem id={repo.id} 
          fullName={repo.fullName}
          description={repo.description}
          forks={repo.forks}
          language={repo.language}
          ownerAvatar={repo.ownerAvatar}
          />
        )
    
    }
        
        />
        
    )
}

export default RepositoryList