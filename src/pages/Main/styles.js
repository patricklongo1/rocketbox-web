import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.form`
    width: 300px;

    display: flex;
    flex-direction: column;

    input {
        height: 48px;
        border: 1px solid #ddd;
        border-radius: 4px;
        font-size: 16px;
        padding: 20px;
        margin-top: 30px;
    }

    button {
        height: 48px;
        background: #7159c1;
        border-radius: 4px;
        font-size: 16px;
        padding: 20px;
        margin-top: 10px;
        color: #fff;
        font-weight: bold;
        transition: opacity 0.1s;

        &:hover {
            opacity: 0.8;
        }
    }
`;
