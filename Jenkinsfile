executePipeline(
    build: [
        agent: "node",
        pipeline: "build_node",
        imageName: "appvivo/plan-details-front",
        dockerContainer: "node"
    ],
    deploy: [
        agent: "node",
        pipeline: "deploy_webapp",
    ]
)
