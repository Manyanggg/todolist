import styled from 'styled-components';

export const SubBarContainer = styled.div`
    display: flex;
    margin-top: 20px;
    margin-left: 20px; 
    width: 700px; 
    gap: 20px;
    border-bottom: 2px solid #f0f0f0;
`;

export const SubBarButton = styled.button`
    padding: 10px 20px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 18px;
    color: ${(props) => props.active ? '#1b4170' : '#8f9494'};
    border-bottom: 3px solid ${(props) => props.active ? '#56b8af' : 'transparent'};

    &:focus {
    outline: none;
    }
`;
