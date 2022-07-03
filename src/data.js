export const catalogue = [
    {
        name: "glue",
        namespaces: [
            {
                name: "namespace1-glue",
                tables: [
                    {
                        name: "table11-glue",
                        attributes: {
                            "name": "glue",
                            "warehouse": "s3://dummy",
                            "io-impl": "org.apache.iceberg.aws.s3.S3FileIO",
                            "lock.table": "cdp001-lakehouse-lock-table-2",
                            "lock-impl": "org.apache.iceberg.aws.glue.DynamoLockManager"
                        }

                    },
                    {
                        name: "table12-glue",
                        attributes: {
                            "name": "glue",
                            "warehouse": "s3://dummy",
                            "io-impl": "org.apache.iceberg.aws.s3.S3FileIO",
                            "lock.table": "cdp001-lakehouse-lock-table-2",
                            "lock-impl": "org.apache.iceberg.aws.glue.DynamoLockManager"
                        }
                    },
                ]
            },
            {
                name: "namespace2-glue",
                tables: [
                    {
                        name: "table21-glue"
                    },
                    {
                        name: "table22-glue"
                    },
                ]

            }
        ],
    },
    {
        name: "jdbc",
        namespaces: [
            {
                name: "namespace1-jdbc",
                tables: [
                    {
                        name: "table11-jdbc",
                        attributes: {
                            "name": "jdbc",
                            "warehouse": "s3://dummy",
                            "io-impl": "org.apache.iceberg.aws.s3.S3FileIO",
                            "lock.table": "cdp001-lakehouse-lock-table-2",
                            "lock-impl": "org.apache.iceberg.aws.jdbc.DynamoLockManager"
                        }

                    },
                    {
                        name: "table12-jdbc",
                        attributes: {
                            "name": "jdbc",
                            "warehouse": "s3://dummy",
                            "io-impl": "org.apache.iceberg.aws.s3.S3FileIO",
                            "lock.table": "cdp001-lakehouse-lock-table-2",
                            "lock-impl": "org.apache.iceberg.aws.jdbc.DynamoLockManager"
                        }
                    },
                ]
            },
            {
                name: "namespace2-jdbc",
                tables: [
                    {
                        name: "table21-jdbc"
                    },
                    {
                        name: "table22-jdbc"
                    },
                ]

            }
        ],
    },
];