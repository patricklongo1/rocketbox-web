/* eslint-disable no-shadow */
/* eslint-disable no-var */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React, { useEffect, useState } from 'react';
import socket from 'socket.io-client';
import { MdInsertDriveFile } from 'react-icons/md';
import { toast } from 'react-toastify';
import { formatDistance, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import Dropzone from 'react-dropzone';
import PropTypes from 'prop-types';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

import { Container, BoxTitle, Archives, DropSpace } from './styles';

export default function Box({ match }) {
    const [box, setBox] = useState({});

    async function subscribeToNewFiles() {
        const { id } = match.params;
        const io = socket('http://localhost:3333');

        io.emit('connectRoom', id);
        io.on('file', data => {
            const [file] = data;
            setBox({ ...box, files: [file, ...box.files] });
        });
    }

    useEffect(() => {
        async function loadFiles() {
            subscribeToNewFiles();
            const { id } = match.params;
            const response = await api.get(`boxes/${id}`);
            setBox(response.data);
        }
        loadFiles();
    }, [match.params]);

    async function handleUpload(files) {
        files.map(file => {
            const data = new FormData();
            const { id } = match.params;

            data.append('file', file);

            api.post(`boxes/${id}/files`, data);
            return toast.success('Arquivo enviado com sucesso');
        });
    }

    return (
        <Container>
            <BoxTitle>
                <img src={logo} alt="Rocket Box" />
                <h1>{box.title}</h1>
            </BoxTitle>

            <Dropzone onDropAccepted={handleUpload}>
                {({ getRootProps, getInputProps }) => (
                    <DropSpace {...getRootProps()}>
                        <input {...getInputProps()} />

                        <p>Arraste arquivos, ou clique aqui!</p>
                    </DropSpace>
                )}
            </Dropzone>

            <Archives>
                {box.files &&
                    box.files.map(file => (
                        <li key={file._id}>
                            <a href={file.url} className="fileInfo">
                                <MdInsertDriveFile size={24} color="#a5cfff" />
                                <strong>{file.title}</strong>
                            </a>
                            <span>
                                Há{' '}
                                {formatDistance(
                                    parseISO(file.createdAt),
                                    new Date(),
                                    {
                                        locale: pt,
                                    }
                                )}
                            </span>
                        </li>
                    ))}
            </Archives>
        </Container>
    );
}

Box.propTypes = {
    match: PropTypes.object.isRequired,
};
