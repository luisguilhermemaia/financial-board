(function () {
    'use strict';

    angular
        .module('board')
        .factory('OfficeService', Office);

    function Office() {
        var nome = { 
            nome: 'CHC' 
        };

        function getNome(){
            return nome;
        }

        return {
            nome: getNome,
            importance: {
                    label: 'Prioridade',
                    placeholder: 'Prioridade desta tarefa',
                    autocomplete: {
                        value: 'number',
                        display: 'text',
                        disableSearch: true,
                        loadAll: function () {
                            var priorities = [
                                {
                                    number: 1,
                                    text: 'Baixíssima'
                                },
                                {
                                    number: 2,
                                    text: 'Baixa'
                                },
                                {
                                    number: 3,
                                    text: 'Média'
                                },
                                {
                                    number: 4,
                                    text: 'Alta'
                                },
                                {
                                    number: 5,
                                    text: 'Urgente'
                                }
                            ];
                            return $q.when(priorities);
                        }
                    }
                },
                type: {
                    label: 'Tipo',
                    placeholder: 'Selecione um tipo',
                    autocomplete: {
                        value: 'id',
                        display: 'name',
                        loadAll: function (projectId) {
                        }
                    }
                },
                subType: {
                    label: 'Subtipo',
                    placeholder: 'Selecione um subtipo',
                    validate: {
                        required: {
                            message: 'Campo obrigatório.'
                        }
                    },
                    autocomplete: {
                        value: 'id',
                        display: 'name'
                    }
                },
                user: {
                    label: 'Responsável',
                    placeholder: 'Selecione um responsável',
                    validate: {
                        required: {
                            message: 'Campo obrigatório.'
                        }
                    },
                    autocomplete: {
                        value: 'id',
                        display: 'person.name',
                        loadAll: function (projectId) {
                        }
                    }
                },
                title: {
                    label: 'Título',
                    placeholder: 'Defina um título',
                    validate: {
                        required: {
                            message: 'Campo obrigatório.'
                        },
                        len: {
                            args: [4, 100],
                            message: 'Título da tarefa deve conter de 4 a 100 caracteres.'
                        }
                    }
                },
                expectedStartDate: {
                    label: 'Data de início',
                    placeholder: 'Defina uma data',
                    validate: {
                        isDate: {
                            masks: ['DD/MM/YYYY HH:mm'],
                            message: 'Data inválida.'
                        }
                    }
                },

                // TODO Remover quando detalhamento antigo for removido.
                expectedStartTime: {
                    label: 'Hora de início',
                    placeholder: 'Defina uma hora',
                    validate: {
                        required: {
                            message: 'Campo obrigatório.'
                        }
                    }
                },

                deadlineDate: {
                    label: 'Data de conclusão',
                    placeholder: 'Defina uma data',
                    validate: {
                        isDate: {
                            masks: ['DD/MM/YYYY HH:mm'],
                            message: 'Data inválida.'
                        }
                    }
                },

                // TODO Remover quando detalhamento antigo for removido.
                deadlineTime: {
                    label: 'Hora de conclusão',
                    placeholder: 'Defina uma hora',
                    validate: {
                        required: {
                            message: 'Campo obrigatório.'
                        }
                    }
                },

                project: {
                    label: 'Projeto',
                    placeholder: 'Selecione um projeto',
                    validate: {
                        required: {
                            message: 'Campo obrigatório.'
                        }
                    },
                    autocomplete: {
                        value: 'id',
                        display: 'name',
                        loadAll: function (projectId) {
                            return ProjectApi.getAll();
                        }
                    }
                },

                estimatedSeconds: {
                    label: 'Estimativa de esforço',
                    placeholder: 'hh:mm:ss'
                },

                elapsedSeconds: {
                    label: 'Tempo trabalhado',
                    placeholder: 'hh:mm:ss'
                },

                taskReminders: {
                    label: 'Lembretes',
                    placeholder: 'Adicione lembretes'
                },

                // TODO Remover quando detalhamento antigo for removido.
                emailReminders: {
                    label: 'Lembretes por email',
                    placeholder: 'Adicione lembretes',
                    autocomplete: {
                        value: 'value',
                        display: 'view',
                        loadAll: function (projectId) {
                        }
                    }
                },

                // TODO Remover quando detalhamento antigo for removido.
                notificationReminders: {
                    label: 'Lembretes por notificação',
                    placeholder: 'Adicione lembretes',
                    autocomplete: {
                        value: 'value',
                        display: 'view',
                        loadAll: function (projectId) {
                        }
                    }
                },

                description: {
                    label: 'Descrição',
                    placeholder: 'Escreva uma descrição para esta tarefa'
                },

                observation: {
                    label: 'Observação',
                    placeholder: 'Escreva uma observação'
                }
        }
    }

})();
