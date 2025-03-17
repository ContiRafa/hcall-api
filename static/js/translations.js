// Translations for the API documentation
const translations = {
    'en-us': {
        // Navigation
        'api-docs': 'API Docs',
        'introduction': 'Introduction',
        'what-is-this': 'What is this API?',
        'base-url': 'Base URL',
        'authentication': 'Authentication',
        'login': 'Login',
        'register': 'Register',
        'users': 'Users',
        'user-fetch': 'Fetch User Information',
        'user-fetchall': 'List All Users',
        'user-create': 'Create User',
        'user-update': 'Update User',
        'user-delete': 'Delete User',
        'tickets': 'Tickets',
        'ticket-create': 'Create Ticket',
        'ticket-edit': 'Update Status',
        'ticket-update': 'Update History',
        'ticket-fetch': 'Fetch Tickets',
        'ticket-info': 'Ticket Details',
        'ticket-remove': 'Delete Ticket',
        'status-codes': 'Status Codes',
        
        // Content
        'api-title': 'HCall API',
        'api-description': 'This API allows managing technical support tickets, including user authentication, creation, editing, querying, and removal of tickets.',
        'api-features': 'Features:',
        'api-feature-1': 'User authentication and management',
        'api-feature-2': 'Ticket creation and tracking',
        'api-feature-3': 'Assignment and status updates',
        'api-feature-4': 'Secure communication with JWT',
        
        // API Explanation Section
        'api-explanation-intro': 'The Ticket Management API is a comprehensive solution for companies and organizations that need to efficiently manage technical support requests. It offers a wide range of endpoints that allow:',
        'api-feature-user-management': 'User Management:',
        'api-feature-user-management-desc': 'Create, query, and remove users easily, allowing full control over who can access the system.',
        'api-feature-ticket-tracking': 'Ticket Creation and Tracking:',
        'api-feature-ticket-tracking-desc': 'Register new technical tickets with detailed information such as category, equipment, and problem description.',
        'api-feature-status-updates': 'Status Updates:',
        'api-feature-status-updates-desc': 'Monitor ticket progress by changing their status (pending, in progress, completed).',
        'api-feature-history': 'Complete History:',
        'api-feature-history-desc': 'Maintain a detailed chronological record of all updates made to each ticket.',
        'api-feature-filtering': 'Advanced Filtering:',
        'api-feature-filtering-desc': 'Retrieve specific tickets using filters by author and status, facilitating organization and prioritization.',
        'api-explanation-conclusion': 'With a simple RESTful architecture, this API can be easily integrated with any frontend system, providing flexibility for different user interface implementations.',
        
        // Common
        'description': 'Description:',
        'request-body': 'Request Body:',
        'responses': 'Responses:',
        'success': 'Success',
        'error': 'Error',
        'query-params': 'Query Parameters:',
        'path-params': 'Path Parameters:',
        'headers': 'Headers:',
        'examples': 'Examples:',
        'notes': 'Notes:',
        'observations': 'Observations:',
        
        // Descriptions
        'login-desc': 'Authenticates a user in the system, verifying their credentials and allowing access to protected API functionalities.',
        'register-desc': 'Registers a new user in the system, allowing them to create an account to access the platform.',
        'user-fetch-desc': 'Retrieves information about a specific user or lists all users in the system.',
        'user-fetchall-desc': 'Retrieves a list of all users registered in the system, showing only basic information (name and email) for each one.',
        'user-delete-desc': 'Removes a user from the system.',
        'user-create-desc': 'Creates a new user in the system.',
        'ticket-create-desc': 'Creates a new technical support ticket.',
        'ticket-edit-desc': 'Updates the status of an existing ticket.',
        'ticket-update-desc': 'Adds a new entry to the history of an existing ticket.',
        'ticket-fetch-desc': 'Lists tickets from a specific author or all tickets in the system.',
        'ticket-info-desc': 'Retrieves detailed information about a specific ticket, including its complete history.',
        'ticket-remove-desc': 'Removes a ticket from the system. Only the ticket author can remove it.',
        'status-codes-desc': 'The API uses the following HTTP status codes:',
        
        // Parameter descriptions
        'email-param-desc': 'User email (example: <code>email=johndoe@example.com</code>)',
        'author-param-desc': 'Author email (example: <code>author=johndoe@example.com</code>)',
        'status-param-desc': 'Status filter (valid values: <code>pending</code>, <code>doing</code>, <code>conclued</code>)',
        'ticket-id-param-desc': 'Ticket ID (example: <code>ticket_id=ticket_123e4567-e89b-12d3-a456-426614174000</code>)',
        
        // Examples
        'example-all-tickets': 'List all tickets:',
        'example-pending-tickets': 'List pending tickets:',
        
        // Messages
        'user-not-found': 'Email aren\'t registered',
        'ticket-not-found': 'Ticket hasn\'t found',
        'no-tickets-found': 'No tickets found',
        'email-exists': 'Email already exists',
        'invalid-password': 'Password is invalid',
        'invalid-data': 'Invalid data',
        'invalid-status': 'Invalid status',
        'invalid-id': 'ID not provided',
        'author-not-found': 'Author not found',
        'user-registered': 'User has been registered',
        'user-logged-in': 'User has been loged in',
        'email-not-registered': 'Email aren\'t registered',
        'incorrect-password': 'Password is incorrect',
        'user-created': 'User has been created',
        'user-deleted': 'User has been deleted',
        'ticket-created': 'Ticket has been created',
        'ticket-edited': 'Ticket has been edited',
        'ticket-updated': 'Update has been setting up',
        'ticket-removed': 'Ticket has been removed'
    },
    'pt-br': {
        // Navegação
        'api-docs': 'Documentação da API',
        'introduction': 'Introdução',
        'what-is-this': 'O que é esta API?',
        'base-url': 'URL Base',
        'authentication': 'Autenticação',
        'login': 'Login',
        'register': 'Registro',
        'users': 'Usuários',
        'user-fetch': 'Obter Informações do Usuário',
        'user-fetchall': 'Listar Todos os Usuários',
        'user-create': 'Criar Usuário',
        'user-update': 'Atualizar Usuário',
        'user-delete': 'Excluir Usuário',
        'tickets': 'Tickets',
        'ticket-create': 'Criar Ticket',
        'ticket-edit': 'Atualizar Status do Ticket',
        'ticket-update': 'Atualizar Histórico do Ticket',
        'ticket-fetch': 'Listar Tickets',
        'ticket-info': 'Obter Informações do Ticket',
        'ticket-remove': 'Remover Ticket',
        'status-codes': 'Códigos de Status',
        
        // Conteúdo
        'api-title': 'Documentação da API de Gerenciamento de Tickets',
        'api-description': 'Esta API permite gerenciar tickets de suporte técnico, incluindo autenticação de usuários, criação, edição, consulta e remoção de tickets.',
        'api-features': 'Recursos:',
        'api-feature-1': 'Autenticação e gerenciamento de usuários',
        'api-feature-2': 'Criação e acompanhamento de tickets',
        'api-feature-3': 'Atribuição e atualizações de status',
        'api-feature-4': 'Comunicação segura com JWT',
        
        // Seção de Explicação da API
        'api-explanation-intro': 'A API de Gerenciamento de Tickets é uma solução completa para empresas e organizações que precisam gerenciar solicitações de suporte técnico de forma eficiente. Ela oferece um conjunto abrangente de endpoints que permitem:',
        'api-feature-user-management': 'Gerenciamento de Usuários:',
        'api-feature-user-management-desc': 'Crie, consulte e remova usuários com facilidade, permitindo controle total sobre quem pode acessar o sistema.',
        'api-feature-ticket-tracking': 'Criação e Rastreamento de Tickets:',
        'api-feature-ticket-tracking-desc': 'Registre novos tickets técnicos com informações detalhadas como categoria, equipamento e descrição do problema.',
        'api-feature-status-updates': 'Atualizações de Status:',
        'api-feature-status-updates-desc': 'Acompanhe o progresso dos tickets alterando seu status (pendente, em andamento, concluído).',
        'api-feature-history': 'Histórico Completo:',
        'api-feature-history-desc': 'Mantenha um registro detalhado e cronológico de todas as atualizações feitas em cada ticket.',
        'api-feature-filtering': 'Filtragem Avançada:',
        'api-feature-filtering-desc': 'Recupere tickets específicos usando filtros por autor e status, facilitando a organização e priorização.',
        'api-explanation-conclusion': 'Com uma arquitetura RESTful simples, esta API pode ser facilmente integrada a qualquer sistema frontend, proporcionando flexibilidade para diferentes implementações de interface do usuário.',
        
        // Comum
        'description': 'Descrição:',
        'request-body': 'Corpo da Requisição:',
        'responses': 'Respostas:',
        'success': 'Sucesso',
        'error': 'Erro',
        'query-params': 'Parâmetros de Consulta:',
        'path-params': 'Parâmetros de Caminho:',
        'headers': 'Cabeçalhos:',
        'examples': 'Exemplos de uso:',
        'notes': 'Notas:',
        'observations': 'Observações:',
        
        // Descrições
        'login-desc': 'Autentica um usuário no sistema, verificando suas credenciais e permitindo acesso às funcionalidades protegidas da API.',
        'register-desc': 'Registra um novo usuário no sistema, permitindo que ele crie uma conta para acessar a plataforma.',
        'user-fetch-desc': 'Recupera informações de um usuário específico ou lista todos os usuários do sistema.',
        'user-fetchall-desc': 'Recupera uma lista de todos os usuários cadastrados no sistema, mostrando apenas informações básicas (nome e email) de cada um.',
        'user-delete-desc': 'Remove um usuário do sistema.',
        'user-create-desc': 'Cria um novo usuário no sistema.',
        'ticket-create-desc': 'Cria um novo ticket de suporte técnico.',
        'ticket-edit-desc': 'Atualiza o status de um ticket existente.',
        'ticket-update-desc': 'Adiciona uma nova entrada no histórico de um ticket existente.',
        'ticket-fetch-desc': 'Lista tickets de um autor específico ou todos os tickets do sistema.',
        'ticket-info-desc': 'Recupera informações detalhadas de um ticket específico, incluindo seu histórico completo.',
        'ticket-remove-desc': 'Remove um ticket do sistema. Apenas o autor do ticket pode removê-lo.',
        'status-codes-desc': 'A API utiliza os seguintes códigos de status HTTP:',
        
        // Descrições de parâmetros
        'email-param-desc': 'Email do usuário (exemplo: <code>email=johndoe@example.com</code>)',
        'author-param-desc': 'Email do autor (exemplo: <code>author=johndoe@example.com</code>)',
        'status-param-desc': 'Filtro por status (valores válidos: <code>pending</code>, <code>doing</code>, <code>conclued</code>)',
        'ticket-id-param-desc': 'ID do ticket (exemplo: <code>ticket_id=ticket_123e4567-e89b-12d3-a456-426614174000</code>)',
        
        // Exemplos
        'example-all-tickets': 'Listar todos os tickets:',
        'example-pending-tickets': 'Listar tickets pendentes:',
        
        // Mensagens
        'user-not-found': 'Email não está registrado',
        'ticket-not-found': 'Ticket não encontrado',
        'no-tickets-found': 'Nenhum ticket encontrado',
        'email-exists': 'Email já existe',
        'invalid-password': 'Senha inválida',
        'invalid-data': 'Dados inválidos',
        'invalid-status': 'Status inválido',
        'invalid-id': 'ID não fornecido',
        'author-not-found': 'Autor não encontrado',
        'user-registered': 'Usuário foi registrado',
        'user-logged-in': 'Usuário foi autenticado',
        'email-not-registered': 'Email não está registrado',
        'incorrect-password': 'Senha incorreta',
        'user-created': 'Usuário foi criado',
        'user-deleted': 'Usuário foi excluído',
        'ticket-created': 'Ticket foi criado',
        'ticket-edited': 'Ticket foi editado',
        'ticket-updated': 'Atualização foi configurada',
        'ticket-removed': 'Ticket foi removido'
    }
}; 
