import { useParams } from "react-router-native";
import useRepositories from "../hooks/useRepositories";
import RepositoryItem from "./RepositoryItem";
import { useQuery } from "@apollo/client/react";
import { REPOSITORY_DETAILS } from "../graphql/queries";

const Repository = (props) => {
    const { repository } = props;

    const result = useQuery(REPOSITORY_DETAILS, {
        variables: { id: repository.id }
    });

    const { loading, error, data } = result;

    if(!loading && !error && data) {
        const repositoryUrl = data.repository.url;
        return <RepositoryItem
            {...repository}
            showUrlButton={true}
            repositoryUrl={repositoryUrl}
        />;
    }
    else {
        console.log('Something is rotten in the state of Denmark.');
        return null;
    }
};

const RepositoryWrapper = () => {
    const { id } = useParams();
    const { repositories } = useRepositories();

    if(!repositories) {
        return null
    }
    const repository = repositories.edges.map(r => r.node).find(repo => repo.id === id);
    
    if(!repository) {
        return null
    }

    return (
        <Repository repository={repository}/>
    );
};

export default RepositoryWrapper;