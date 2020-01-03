import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100%;
    width: 100%;
    max-width: 900px;
    margin: 50px auto 0;
`;

export const BoxTitle = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;

    h1 {
        font-size: 21px;
        padding-left: 15px;
        margin-left: 15px;
        border-left: 1px solid #ddd;
    }

    button {
        &:hover {
            opacity: 0.9;
        }

        svg {
            margin-left: 10px;
        }
    }
`;

export const Archives = styled.ul`
    margin: 30px 0;
    list-style: none;

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 20px 30px 0;
        margin-top: 20px;
        border-top: 1px solid #888;

        &:first-child {
            border-top: 0;
            padding-top: 0;
            margin-top: 0;
        }
    }

    a.fileInfo {
        display: flex;
        align-items: center;
        text-decoration: none;

        strong {
            font-weight: normal;
            font-size: 14px;
            margin-left: 10px;
            color: #333;
        }

        span {
            color: #999;
            font-size: 13px;
        }
    }
`;

export const DropSpace = styled.div`
    border-radius: 4px;
    padding: 30px;
    text-align: center;
    border: 1px dashed #999;
    color: #999;
    margin-top: 50px;
    cursor: pointer;
`;
