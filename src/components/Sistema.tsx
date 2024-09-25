"use client";

import React, { useState } from "react";
import { Diretorio } from "@/types/Diretorio";

type Props = {
	diretorio: Diretorio;
};

const Sistema: React.FC<Props> = ({ diretorio }) => {
	const [isOpen, setIsOpen] = useState(false);

  	return (
		<div style={{ marginLeft: '20px' }}>
			<span onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
            	{isOpen ? "📂" : "📁"} <strong>{diretorio.nome}</strong>
          	</span>
			 
			<ul>
				{isOpen && (
					<div>
						{diretorio.subDiretorios && diretorio.subDiretorios.map((subDir) => (
							<li key={subDir.id}>
								<Sistema diretorio={subDir} />
							</li>
						))}
						<div style={{ marginLeft: '20px' }}>
							{diretorio.arquivos && diretorio.arquivos.map((arquivo) => (
								<li key={arquivo.id}>
									📄 {arquivo.nome}
								</li>
							))}
						</div>
						<div style={{ marginLeft: '20px' }}>
							{diretorio.subDiretorios && diretorio.subDiretorios.length === 0 && diretorio.arquivos && diretorio.arquivos.length === 0 ? (
								<div>(Diretório Vazio)</div>
							) : null}
						</div>
					</div>					
				)}
			</ul>
    	</div>
  );
};

export default Sistema;
